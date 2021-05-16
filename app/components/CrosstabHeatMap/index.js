/**
 *
 * CrosstabHeatMap
 *
 */

import React, { memo, Fragment, useState } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
import { scaleBand, scaleLinear, max, range, scaleThreshold } from 'd3';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// const height = 700;
const margin = { top: 0, right: 80, bottom: 65, left: 0 };
const innerRectWidth = 100;
const innerPadding = 10;
// const maxBarWidth = 90;

const CrosstabHeatMap = ({ chartData, isShowPercentage }) => {
  const percentArray = [];
  const minmax = [];
  chartData.chart_data.map(a =>
    a.dist.map(b => percentArray.push(b.perc_of_total * 100)),
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
      '#CDE5E7',
      '#9CCCD1',
      '#8FC6CC',
      '#82C0C6',
      '#68B0B7',
      '#4DA0A8',
      '#339099',
      '#177983',
      '#16737D',
    ]);

  const barScale = scaleLinear()
    .domain([0, max(chartData.chart_data, d => d.perc_of_total * 100)])
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

  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width + 300} ${height}`}
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          {chartData.chart_data.map((d, index) => (
            <Fragment key={uid(d, index)}>
              <rect
                fill="rgba(0,0,0,0.1)"
                x={xScale(0)}
                y={yScale(index)}
                width={width - margin.left - margin.right}
                height={yScale.bandwidth()}
              />

              <rect
                fill="rgba(0,0,0,0.2)"
                x={xScale(0)}
                y={yScale(index)}
                width={
                  crosstabWidth + innerPadding + barScale(d.perc_of_total * 100)
                }
                height={yScale.bandwidth()}
              />

              {chartData.chart_data[index].dist.map((d, i) => (
                <g key={uid(d, i)}>
                  <rect
                    fill={getColor(d.perc_of_total * 100)}
                    x={innerXScale(i) + innerPadding}
                    y={yScale(index) + innerPadding}
                    width={innerRectWidth}
                    height={yScale.bandwidth() - 20}
                  />
                  <text
                    style={{
                      fontWeight: '600',
                      color: 'rgba(0,0,0,0.38)',
                      textAnchor: 'end',
                    }}
                    x={innerXScale(i) + innerRectWidth + innerPadding}
                    y={yScale(index) + yScale.bandwidth() - innerPadding}
                    dx={-innerPadding / 2}
                    dy={-innerPadding / 1.5}
                  >
                    {isShowPercentage
                      ? `${Math.round(d.perc_of_total * 100)}%`
                      : d.total}
                  </text>
                </g>
              ))}
            </Fragment>
          ))}

          {chartData.chart_data[0].dist.map((labels, index) => (
            <text
              x={innerXScale(index) + innerPadding / 2 + yScale.bandwidth() / 2}
              y={innerHeight}
              verticalAnchor="start"
              textAnchor="middle"
              dominantBaseline="end"
              style={{ fontWeight: '600', fontSize: '0.9rem' }}
            >
              {textSplitter(labels.x_label_en).map((text, i) => (
                <tspan
                  key={uid(text, i)}
                  x={
                    innerXScale(index) +
                    innerPadding / 2 +
                    yScale.bandwidth() / 2
                  }
                  y={innerHeight + 10}
                  dy={i === 0 ? '0em' : '1.2em'}
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
                {textSplitter(option.y_label_en)
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
                    ? `${Math.round(option.perc_of_total * 100)}%`
                    : option.total}
                </tspan>
              </text>
            </g>
          ))}
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
