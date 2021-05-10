/**
 *
 * CrosstabHeatMap
 *
 */

import React, { memo, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { uid } from 'react-uid';
// import {textWrap} from 'd3plus-text';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import * as d3 from 'd3';
import { scaleBand, scaleLinear, max, range, scaleThreshold } from 'd3';
import Typography from '@material-ui/core/Typography';
import Text from 'react-svg-text';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const width = 1000;
const height = 700;
const margin = { top: 0, right: 80, bottom: 65, left: 0 };
const colorData = [52, 16, 17, 69, 98];
const innerRectWidth = 100;
const innerPadding = 10;
const maxBarWidth = 150;

const labelsY = [
  {
    label: 'Experience selling',
    perc: '50%',
  },
  {
    label: 'Hospitality',
    perc: '50%',
  },
  {
    label: 'Transportation',
    perc: '50%',
  },
  {
    label: 'Entertainment',
    perc: '50%',
  },
  {
    label: 'Management',
    perc: '50%',
  },
];

const CrosstabHeatMap = () => {
  const data = [31, 27, 21, 11, 10];

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = data => data;
  const xValue = data => data;

  const crosstabWidth =
    data.length * innerRectWidth + (data.length + 1) * innerPadding;

  const xScale = scaleLinear()
    .domain([0, max(data, d => d)])
    .range([margin.left, innerWidth]);

  const yScale = scaleBand()
    .domain(range(data.length))
    .rangeRound([margin.top, height - margin.bottom])
    .padding(0.1);

  const innerXScale = scaleLinear()
    .domain([0, data.length])
    .range([margin.left, crosstabWidth]);

  const getColor = scaleThreshold()
    .domain([10, 20, 30, 40, 50, 60, 70, 80, 90])
    .range([
      '#CDE5E7',
      '#9CCCD1',
      '#82C0C6',
      '#4DA0A8',
      '#187F89',
      '#16737D',
      '#0B5C76',
      '#0A546B',
      '#094C61',
    ]);

  const barScale = scaleLinear()
    .domain([0, max(data, d => d)])
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

  const rightOptions = [
    { label: 'Difficulty covering rent', perc: '31' },
    { label: 'Difficulty paying for food', perc: '27' },
    { label: 'Difficulty in repaying existing debt', perc: '21' },
    { label: 'Difficulty paying for health services', perc: '11' },
    { label: 'Others', perc: '10' },
  ];

  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width + 300} ${height}`}
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map((d, index) => (
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
                width={crosstabWidth + barScale(d)}
                height={yScale.bandwidth()}
              />

              {colorData.map((d, i) => (
                <g key={uid(d, i)}>
                  <rect
                    fill={getColor(d)}
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
                    {d}%
                  </text>
                </g>
              ))}
            </Fragment>
          ))}

          {labelsY.map((labels, index) => (
            <Text
              key={uid(labels, index)}
              fill="rgba(255,255,255,0.7)"
              x={innerXScale(index) + innerPadding / 2 + yScale.bandwidth() / 2}
              y={innerHeight}
              verticalAnchor="start"
              textAnchor="middle"
              width={100}
              style={{ fontWeight: '600', fontSize: '0.9rem' }}
            >
              {labels.label}
            </Text>
          ))}

          {rightOptions.map((option, index) => (
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
                {textSplitter(option.label)
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
                  {option.perc}%
                </tspan>
              </text>
            </g>
          ))}
        </g>
      </svg>
    </Fragment>
  );
};

CrosstabHeatMap.propTypes = {};

export default memo(CrosstabHeatMap);
