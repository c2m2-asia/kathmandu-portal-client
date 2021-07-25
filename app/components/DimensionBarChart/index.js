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
import { primary } from 'theme';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './styles.css';

const height = 350;
const barWidth = 130;
const margin = { top: 0, right: 0, bottom: 70, left: 0 };
const padding = 15;

const locale = 'en';

function DimensionBarChart({ chartData, isShowPercentage }) {
  const data = chartData;
  const width = data.length * barWidth + data.length * padding;

  // const dimensionLabel = dimensions[surveyArea]
  //   .find(a => a.value === dimension)
  //   .label.toLowerCase();

  const y = scaleLinear()
    .domain([0, max(data, d => d.percoftotal * 100)])
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
                fill={primary}
                x={x(index)}
                y={y(datum.percoftotal * 100)}
                width={barWidth}
                height={y(0) - y(datum.percoftotal * 100)}
              />
              <text
                x={x(index) + barWidth}
                y={y(0)}
                dy="-.3em"
                dx="-.3em"
                style={{
                  fontWeight: '500',
                  textAnchor: 'end',
                  color: `${datum.percoftotal * 100 < 4 ? 'black' : 'white'}`,
                }}
              >
                {isShowPercentage
                  ? `${Math.round(datum.percoftotal * 100)}%`
                  : `${datum.total}`}
              </text>
            </g>
          ))}
          {data.map((datum, index) => (
            <text
              key={uid(datum, index)}
              x={x(index) + x.bandwidth() / 2 - padding / 2}
              y={height - margin.bottom + 15}
              verticalAnchor="start"
              textAnchor="middle"
              dominantBaseline="end"
              style={{ fontWeight: '500', textAnchor: 'middle' }}
            >
              {textSplitter(datum.label[locale], 13).map((text, i) => (
                <tspan
                  key={uid(text, i)}
                  x={x(index) + x.bandwidth() / 2 - padding / 2}
                  y={height - margin.bottom + 25}
                  dy={i === 0 ? '0em' : `${i * 1.2}em`}
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
