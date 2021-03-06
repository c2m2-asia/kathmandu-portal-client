/**
 *
 * UnivariateBarChart
 *
 */

import React, { Fragment, memo } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
import { scaleBand, scaleLinear, max, range } from 'd3';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const barHeight = 80;
const margin = { top: 0, right: 50, bottom: 0, left: 0 };

function UnivariateBarChart({ chartData, isShowPercentage, locale }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const data = chartData.chart_data;
  const height = data.length * barHeight + (data.length + 1 * 10);
  const width = 800;
  const innerTextColor = '#ffffff';
  const outerTextColor = '#696969';

  // const dimensionLabel = dimensions[surveyArea]
  //   .find(a => a.value === dimension)
  //   .label.toLowerCase();

  const x = scaleLinear()
    .domain([0, max(data, d => d.percoftotal * 100)])
    .nice()
    .range([margin.left, width - margin.right]);

  const y = scaleBand()
    .domain(range(data.length))
    .rangeRound([0, height])
    .padding(0.1);

  const textSplitter = (text, maxWidth = 45) => {
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

  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Fragment>
      <svg viewBox={`0 0 ${matches ? width : width + 400} ${height + 90}`}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map((datum, index) => (
            <g key={uid(datum, index)}>
              <rect
                fill="#2a9d8f"
                x={x(0)}
                y={y(index)}
                width={x(datum.percoftotal * 100)}
                height={y.bandwidth()}
              />
              {datum.percoftotal * 100 > 35 && (
                <text
                  x={x(datum.percoftotal * 100)}
                  y={y(index) + y.bandwidth() / 2}
                  dy=".35em"
                  dx="-5"
                  style={{
                    fontWeight: '600',
                    textAnchor: 'end',
                    color: 'black',
                    fontSize: '14px',
                  }}
                  verticalAnchor="middle"
                  textAnchor="end"
                  dominantBaseline="central"
                >
                  {textSplitter(datum.label[locale]).map((text, i, arr) => (
                    <tspan
                      key={uid(text, i)}
                      x={x(datum.percoftotal * 100)}
                      y={y(index) + y.bandwidth() / 2}
                      dy={i === 0 ? '0em' : '1.2em'}
                      dx="-5"
                      style={{
                        fontWeight: '600',
                        textAnchor: 'end',
                        color: innerTextColor,
                      }}
                    >
                      {text}
                      {arr.length - 1 === i && (
                        <Fragment>
                          ,&nbsp;
                          {isShowPercentage
                            ? `${Math.round(datum.percoftotal * 100)}%`
                            : `${datum.total}`}
                        </Fragment>
                      )}
                    </tspan>
                  ))}
                </text>
              )}
              {datum.percoftotal * 100 < 35 && (
                <text
                  x={x(datum.percoftotal * 100)}
                  y={y(index) + y.bandwidth() / 2}
                  dy=".35em"
                  dx="5"
                  style={{
                    fontWeight: '600',
                    textAnchor: 'start',
                    color: 'black',
                    fontSize: '14px',
                  }}
                  verticalAnchor="middle"
                  textAnchor="start"
                  dominantBaseline="central"
                >
                  {textSplitter(datum.label[locale]).map((text, i, arr) => (
                    <tspan
                      key={uid(text, i)}
                      x={x(datum.percoftotal * 100)}
                      y={y(index) + y.bandwidth() / 2}
                      dy={i === 0 ? '0em' : '1.2em'}
                      dx="5"
                      style={{
                        fontWeight: '600',
                        textAnchor: 'start',
                        color: outerTextColor,
                      }}
                    >
                      {text}
                      {arr.length - 1 === i && (
                        <Fragment>
                          ,&nbsp;
                          {isShowPercentage
                            ? `${Math.round(datum.percoftotal * 100)}%`
                            : `${datum.total}`}
                        </Fragment>
                      )}
                    </tspan>
                  ))}
                </text>
              )}
            </g>
          ))}
          <text
            x={width - margin.left - margin.right}
            y={height + 50}
            textAnchor="end"
            style={{
              fontSize: '0.9rem',
              color: '#696969',
            }}
          >
            {capitalize(chartData.chartInfo)}
          </text>
          {chartData.inputType === 'multi-select' && (
            <text
              x={width - margin.left - margin.right}
              y={height + 50}
              textAnchor="end"
              dy="1.2em"
              style={{ fontSize: '0.9rem', color: '#696969' }}
            >
              Respondents could select more than one answer for this question.
            </text>
          )}
          <text
            x={width - margin.left - margin.right}
            y={height + 50}
            textAnchor="end"
            dy={`${chartData.inputType === 'multi-select' ? '2.4em' : '1.2em'}`}
            style={{ fontSize: '0.9rem', color: '#696969' }}
          >
            {chartData.surveyInfo}
          </text>
        </g>
      </svg>
    </Fragment>
  );
}

UnivariateBarChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  isShowPercentage: PropTypes.bool.isRequired,
  locale: PropTypes.string,
};

export default memo(UnivariateBarChart);
