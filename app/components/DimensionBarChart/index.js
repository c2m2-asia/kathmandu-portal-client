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
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

const data = [
  { label: 'Experience selling', value: '31' },
  { label: 'Hospitality', value: '27' },
  { label: 'Transportation', value: '21' },
  { label: 'Entertainment', value: '11' },
  { label: 'Management', value: '10' },
];

const height = 320;
const barWidth = 130;
const margin = { top: 0, right: 0, bottom: 50, left: 0 };
const padding = 15;

function DimensionBarChart({ dimension, surveyArea }) {
  const [isShowPercentagesChecked, setIsShowPercentagesChecked] = useState(
    true,
  );

  const width = data.length * barWidth + data.length * padding;

  const dimensionLabel = dimensions[surveyArea]
    .find(a => a.value === dimension)
    .label.toLowerCase();

  const y = scaleLinear()
    .domain([0, max(data, d => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const x = scaleBand()
    .domain(range(data.length))
    .range([0, width]);

  return (
    <div style={{ background: '#0A546B' }}>
      <div
        className="container"
        style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
      >
        <Typography variant="h6" gutterBottom>
          Distribution of responses by {dimensionLabel}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Showing 322 responses
        </Typography>
        <div
          style={{
            display: 'flex',
            gap: '1.2rem',
            alignItems: 'center',
            marginTop: '1.5rem',
          }}
        >
          <Link style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', gap: '0.3rem' }}>
              <GetAppIcon style={{ color: 'rgba(255,255,255,0.5)' }} />
              <Typography variant="body2" gutterBottom>
                Download this data
              </Typography>
            </div>
          </Link>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: 'rgba(255,255,255,0.5)' }}
                checked={isShowPercentagesChecked}
                onChange={() =>
                  setIsShowPercentagesChecked(!isShowPercentagesChecked)
                }
                name="checkedB"
                color="primary"
              />
            }
            label={
              <Typography variant="body2" gutterBottom>
                Show percentages?
              </Typography>
            }
          />
        </div>
        <svg viewBox={`0 0 ${width + 700} ${height}`}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            {data.map((datum, index) => (
              <g key={uid(datum, index)}>
                <rect
                  fill="#82C0C6"
                  x={x(index)}
                  y={y(datum.value)}
                  width={barWidth}
                  height={y(0) - y(datum.value)}
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
                  {datum.value}%
                </text>
              </g>
            ))}
            {data.map((datum, index) => (
              <Text
                key={uid(datum, index)}
                fill="#82C0C6"
                x={x(index) + x.bandwidth() / 2}
                y={height - margin.bottom + padding}
                width={100}
                style={{ fontWeight: '600', textAnchor: 'middle' }}
                verticalAnchor="start"
              >
                {datum.label}
              </Text>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

DimensionBarChart.propTypes = {
  surveyArea: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
};

export default memo(DimensionBarChart);
