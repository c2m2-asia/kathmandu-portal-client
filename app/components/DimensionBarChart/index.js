/**
 *
 * DimensionBarChart
 *
 */

import React, { memo, useState } from 'react';
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Text from 'react-svg-text';
import { scaleBand, scaleLinear, max, range } from 'd3';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './styles.css';

const dimensions = {
  businesses: [
    { label: 'Type', value: 'type' },
    { label: 'Employee size', value: 'employeeSize' },
    { label: 'Operating for', value: 'operatingFor' },
    { label: 'Area', value: 'area' },
    { label: 'Sector', value: 'sector' },
  ],
  workforce: [
    { label: 'Sector', value: 'sector' },
    { label: 'Experience', value: 'experience' },
    { label: 'Education level', value: 'educationLevel' },
  ],
};

// const data = [
//   { label: 'Experience selling', value: '31' },
//   { label: 'Hospitality', value: '27' },
//   { label: 'Transportation', value: '21' },
//   { label: 'Entertainment', value: '11' },
//   { label: 'Management', value: '10' },
// ];

const height = 400;
const barWidth = 130;
const margin = { top: 0, right: 0, bottom: 50, left: 0 };
const padding = 15;

function DimensionBarChart({
  dimension,
  surveyArea,
  chartData,
  isShowPercentage,
}) {
  const data = chartData[Object.keys(chartData)[0]];
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

  console.log('data', data);

  return (
    <>
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
            <Text
              key={uid(datum, index)}
              fill="#82C0C6"
              x={x(index) + x.bandwidth() / 2 - padding / 2}
              y={height - margin.bottom + 10}
              width={barWidth - 20}
              style={{ fontWeight: '600', textAnchor: 'middle' }}
              verticalAnchor="start"
            >
              {datum.label_en}
            </Text>
          ))}
        </g>
      </svg>
    </>
  );
}

DimensionBarChart.propTypes = {
  surveyArea: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired,
  isShowPercentage: PropTypes.bool.isRequired,
};

export default memo(DimensionBarChart);
