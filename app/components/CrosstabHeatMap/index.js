/**
 *
 * CrosstabHeatMap
 *
 */

import React, { memo, Fragment, useState } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
import { scaleBand, scaleLinear, max, range, scaleThreshold } from 'd3';
import './styles.css';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// const height = 700;
const margin = { top: 0, right: 0, bottom: 100, left: 0 };
const innerRectWidth = 100;
const innerPadding = 10;
// const maxBarWidth = 90;

const locale = 'en';

const CrosstabHeatMap = ({ chartData, isShowPercentage }) => {
  const percentArray = [];
  const minmax = [];
  chartData.chart_data.map(a =>
    a.dist.map(b => percentArray.push(b.percoftotal * 100)),
  );
  const maxNo = max(percentArray, d => d);
  ['asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd'].map(
    (el, index) => minmax.push((maxNo / 9) * (index + 1)),
  );

  const width = 1000;

  // const width =
  //   chartData.chart_data[0].dist.length * innerRectWidth +
  //   (chartData.chart_data[0].dist.length + 1) * innerPadding +
  //   maxBarWidth +
  //   150 +
  //   margin.right;

  const maxBarWidth =
    width -
    (chartData.chart_data[0].dist.length * innerRectWidth +
      (chartData.chart_data[0].dist.length + 1) * innerPadding +
      300);

  // console.log(maxBarWidth, chartData.chart_data[0].dist.length);

  const height =
    chartData.chart_data.length * innerRectWidth +
    chartData.chart_data.length * 20 +
    margin.bottom;

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const crosstabWidth =
    chartData.chart_data[0].dist.length * innerRectWidth +
    (chartData.chart_data[0].dist.length + 1) * innerPadding;

  const xScale = scaleLinear()
    .domain([0, max(chartData.chart_data, d => d.total)])
    .range([margin.left, innerWidth]);

  const yScale = scaleBand()
    .domain(range(chartData.chart_data.length))
    .rangeRound([margin.top, height - margin.bottom])
    .padding(0.1);

  const innerXScale = scaleLinear()
    .domain([0, chartData.chart_data[0].dist.length])
    .range([margin.left, crosstabWidth]);

  const getColor = scaleThreshold()
    .domain(minmax)
    .range([
      '#dce4e3',
      '#c8dbd9',
      '#b4d2ce',
      '#a0cac4',
      '#8cc1ba',
      '#77b8af',
      '#61afa4',
      '#49a69a',
      '#2a9d8f',
    ]);

  // const getColor = scaleThreshold()
  //   .domain(minmax)
  //   .range([
  //     '#dbfeb8',
  //     '#cbf6b9',
  //     '#bdedba',
  //     '#b1e4ba',
  //     '#a6dbba',
  //     '#8bcbad',
  //     '#6fbca2',
  //     '#51ac98',
  //     '#2a9d8f',
  //   ]);

  const barScale = scaleLinear()
    .domain([0, max(chartData.chart_data, d => d.percoftotal * 100)])
    .range([0, maxBarWidth]);

  const textSplitter = (text, maxWidth = 15) => {
    // split the text around spaces (to get individual words)
    const words = text.split(/\s+/).reverse();

    // define vars to hold individual words, lines, and all lines
    let word;
    const lines = [];
    let line = [];

    // add words to a line until we exceed the maxWidth (in characters)
    // when we reach width, add the line to lines and start a new line
    while ((word = words.pop())) {
      line.push(word);
      if (line.join(' ').length > maxWidth) {
        line.pop();
        lines.push(line.join(' '));
        line = [word];
      }
    }
    lines.push(line.join(' '));

    return lines;
  };

  const allnum = [];
  chartData.chart_data.map(a => a.dist.map(b => allnum.push(b.percoftotal)));

  function showTooltip(evt, text) {
    let tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = text;
    tooltip.style.display = 'block';
    tooltip.style.left = evt.pageX + 10 + 'px';
    tooltip.style.top = evt.pageY + 10 + 'px';
  }

  function hideTooltip() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
  }

  return (
    <Fragment>
      <div
        id="tooltip"
        display="none"
        style={{ position: 'absolute', display: 'none' }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width + 180} ${height + 30 }`}
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          {chartData.chart_data.map((d, index) => (
            <Fragment key={uid(d, index)}>
              <rect
                fill="rgba(38,70,83,0.15)"
                x={xScale(0)}
                y={yScale(index)}
                width={width - margin.left - margin.right}
                height={yScale.bandwidth()}
              />

              <rect
                fill="rgba(38,70,83,0.55)"
                x={xScale(0)}
                y={yScale(index)}
                width={
                  crosstabWidth + innerPadding + barScale(d.percoftotal * 100)
                }
                height={yScale.bandwidth()}
              />

              {chartData.chart_data[index].dist.map((optDist, i) => (
                <g key={uid(optDist, i)}>
                  <rect
                    fill={getColor(optDist.percoftotal * 100)}
                    x={innerXScale(i) + innerPadding}
                    y={yScale(index) + innerPadding}
                    width={innerRectWidth}
                    height={yScale.bandwidth() - 20}
                    onMouseMove={evt =>
                      showTooltip(
                        evt,
                        `${d.y_label_en} - ${optDist.x_label_en} - ${
                          optDist.total
                        }(${Math.round(optDist.percoftotal * 100)}% of total) `,
                      )
                    }
                    onMouseOut={() => hideTooltip()}
                    onBlur={() => hideTooltip()}
                  />
                  <text
                    style={{
                      fontWeight: '600',
                      color: `${
                        max(allnum) / 2 > optDist.percoftotal
                          ? 'rgba(0,0,0,0.35)'
                          : 'rgba(255,255,255,0.7)'
                      }`,
                      textAnchor: 'end',
                    }}
                    x={innerXScale(i) + innerRectWidth + innerPadding}
                    y={yScale(index) + yScale.bandwidth() - innerPadding}
                    dx={-innerPadding / 2}
                    dy={-innerPadding / 1.5}
                  >
                    {isShowPercentage
                      ? `${Math.round(optDist.percoftotal * 100)}%`
                      : optDist.total}
                  </text>
                </g>
              ))}
            </Fragment>
          ))}

          {chartData.chart_data[0].dist.map((labels, index) => (
            <text
              key={uid(labels, index)}
              x={innerXScale(index) + innerPadding / 2 + yScale.bandwidth() / 2}
              y={innerHeight}
              verticalAnchor="start"
              textAnchor="middle"
              dominantBaseline="end"
              style={{ fontWeight: '500', fontSize: '0.9rem' }}
            >
              {textSplitter(labels.xlabel[locale], 12).map((text, i) => (
                <tspan
                  key={uid(text, i)}
                  x={
                    innerXScale(index) +
                    innerPadding / 2 +
                    yScale.bandwidth() / 2
                  }
                  y={innerHeight + 10}
                  dy={i === 0 ? '0em' : `${i * 1.2}em`}
                >
                  {text}
                </tspan>
              ))}
            </text>
          ))}

          {chartData.chart_data.map((option, index) => (
            <g
              key={uid(option, index)}
              transform={`translate(${margin.left + innerWidth - 10}, ${
                margin.top
              })`}
            >
              <text
                x="0"
                y={yScale(index) + yScale.bandwidth() - 10}
                textAnchor="end"
                dominantBaseline="end"
                style={{ fontSize: '0.9rem' }}
              >
                {textSplitter(option.ylabel[locale], 25)
                  .reverse()
                  .map((text, i) => (
                    <tspan
                      key={uid(text, i)}
                      x="0"
                      dy={i === 0 ? '0em' : '-1.2em'}
                    >
                      {text}
                    </tspan>
                  ))}
                <tspan x="0" dy="-1.2em" fontWeight="bold">
                  {isShowPercentage
                    ? `${Math.round(option.percoftotal * 100)}%`
                    : option.total}
                </tspan>
              </text>
            </g>
          ))}

          <text
            x={width - margin.left - margin.right}
            y={height - 10}
            textAnchor="end"
            style={{ fontSize: '0.9rem', color: '#696969' }}
          >
            <tspan
              x={width - margin.left - margin.right}
              y={height - 10}
              textAnchor="end"
              style={{ fontSize: '0.9rem', color: '#696969' }}
            >
              {chartData.chartInfo}
            </tspan>
            {chartData.inputType === 'multi-select' && (
              <tspan
                x={width - margin.left - margin.right}
                y={height - 10}
                textAnchor="end"
                style={{ fontSize: '0.9rem', color: '#696969' }}
                dy="1.2em"
              >
                Respondents could select more than one answer for this question.
              </tspan>
            )}
            <tspan
              x={width - margin.left - margin.right}
              y={height - 10}
              textAnchor="end"
              dy={`${
                chartData.inputType === 'multi-select' ? '2.4em' : '1.2em'
              }`}
              style={{ fontSize: '0.9rem', color: '#696969' }}
            >
              {chartData.surveyInfo}
            </tspan>
          </text>
        </g>
      </svg>
    </Fragment>
  );
};

CrosstabHeatMap.propTypes = {
  chartData: PropTypes.object.isRequired,
  isShowPercentage: PropTypes.bool.isRequired,
};

export default memo(CrosstabHeatMap);
