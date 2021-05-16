/**
 *
 * UnivariateBarChart
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
// import './styles.css';

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

const barHeight = 80;
const margin = { top: 0, right: 50, bottom: 0, left: 0 };
const padding = 15;

function UnivariateBarChart({
  dimension,
  surveyArea,
  chartData,
  isShowPercentage,
}) {
  const data = chartData.chart_data;
  const height = data.length * barHeight + (data.length + 1 * 10);
  const width = 800;

  // const dimensionLabel = dimensions[surveyArea]
  //   .find(a => a.value === dimension)
  //   .label.toLowerCase();

  const x = scaleLinear()
    .domain([0, max(data, d => d.perc_of_total * 100)])
    .nice()
    .range([margin.left, width - margin.right]);

  const y = scaleBand()
    .domain(range(data.length))
    .rangeRound([0, height])
    .padding(0.1);

  console.log('data', data, x(98));

  return (
    <>
      <svg viewBox={`0 0 ${width+400} ${height}`}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map((datum, index) => (
            <g key={uid(datum, index)}>
              <rect
                fill="#82C0C6"
                x={x(0)}
                y={y(index)}
                width={x(datum.perc_of_total * 100)}
                height={y.bandwidth()}
              />
              {datum.perc_of_total * 100 > 20 && (
                <text
                  x={x(datum.perc_of_total * 100)}
                  y={y(index) + y.bandwidth() / 2}
                  dy=".35em"
                  dx="-4"
                  style={{
                    fontWeight: '600',
                    fontSize: '15px',
                    textAnchor: 'end',
                    color: 'rgba(0,0,0,0.38)',
                  }}
                >
                  {datum.label_en},&nbsp;
                  {isShowPercentage
                    ? `${Math.round(datum.perc_of_total * 100)}%`
                    : `${datum.total}`}
                </text>
              )}
              {datum.perc_of_total * 100 < 20 && (
                <text
                  x={x(datum.perc_of_total * 100)}
                  y={y(index) + y.bandwidth() / 2}
                  dy=".35em"
                  dx="4"
                  style={{
                    fontWeight: '600',
                    fontSize: '15px',
                    textAnchor: 'start',
                    color: 'rgba(255,255,255,0.38)',
                  }}
                >
                  {datum.label_en},&nbsp;
                  {isShowPercentage
                    ? `${Math.round(datum.perc_of_total * 100)}%`
                    : `${datum.total}`}
                </text>
              )}
            </g>
          ))}
          {
            //   data.map((datum, index) => (
            //   <Text
            //     key={uid(datum, index)}
            //     fill="#82C0C6"
            //     x={x(index) + x.bandwidth() / 2 - padding / 2}
            //     y={height - margin.bottom + 15}
            //     width={barWidth - 20}
            //     style={{ fontWeight: '600', textAnchor: 'middle' }}
            //     verticalAnchor="start"
            //   >
            //     {datum.label_en}
            //   </Text>
            // ))
          }
        </g>
      </svg>
    </>
  );
}

UnivariateBarChart.propTypes = {
  surveyArea: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  chartData: PropTypes.array.isRequired,
  isShowPercentage: PropTypes.bool.isRequired,
};

export default memo(UnivariateBarChart);