/**
 *
 * DimensionBarChart
 *
 */

import React, { Fragment, memo } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { scaleBand, scaleLinear, max, range } from 'd3';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './styles.css';

const height = 400;
const barWidth = 130;
const margin = { top: 0, right: 0, bottom: 50, left: 0 };
const padding = 15;

function DimensionBarChart({ chartData, isShowPercentage }) {
  const data = chartData;
  const width = data.length * barWidth + data.length * padding;

  // const dimensionLabel = dimensions[surveyArea]
  //   .find(a => a.value === dimension)
  //   .label.toLowerCase();

  const y = scaleLinear()
    .domain([0, max(data, d => d.perc_of_total * 100)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const x = scaleBand()
    .domain(range(data.length))
    .range([0, width]);

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
      <svg viewBox={`0 0 ${width + 700} ${height}`}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map((datum, index) => (
            <g key={uid(datum, index)}>
              <rect
                fill="#82C0C6"
                x={x(index)}
                y={y(datum.perc_of_total * 100)}
                width={barWidth}
                height={y(0) - y(datum.perc_of_total * 100)}
              />
              <text
                x={x(index) + barWidth}
                y={y(0)}
                dy="-.3em"
                dx="-.3em"
                style={{
                  fontWeight: '600',
                  textAnchor: 'end',
                  color: 'rgba(0,0,0,0.38)',
                }}
              >
                {isShowPercentage
                  ? `${Math.round(datum.perc_of_total * 100)}%`
                  : `${datum.total}`}
              </text>
            </g>
          ))}
          {data.map((datum, index) => (
            <text
              x={x(index) + x.bandwidth() / 2 - padding / 2}
              y={height - margin.bottom + 15}
              verticalAnchor="start"
              textAnchor="middle"
              dominantBaseline="end"
              style={{ fontWeight: '600', textAnchor: 'middle' }}
            >
              {textSplitter(datum.label_en, 13).map((text, i) => (
                <tspan
                  key={uid(text, i)}
                  x={x(index) + x.bandwidth() / 2 - padding / 2}
                  y={height - margin.bottom + 25}
                  dy={i === 0 ? '0em' : '1.2em'}
                >
                  {text}
                </tspan>
              ))}
            </text>
          ))}
        </g>
      </svg>
    </Fragment>
  );
}

DimensionBarChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  isShowPercentage: PropTypes.bool.isRequired,
};

export default memo(DimensionBarChart);
