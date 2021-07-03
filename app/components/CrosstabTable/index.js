/**
 *
 * CrosstabTable
 *
 */

import React, { memo } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import byOrder from 'lodash.orderby';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const locale = 'en';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  icon: {
    '& path': {
      // fill: 'rgba(255,255,255,0.5)',
    },
  },
});

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
    // color: 'rgba(255,255,255,0.75)',
  },
})(MuiTableCell);

function CrosstabTable({ chartData }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(
    chartData.chart_data[0].dist[0].xlabel[locale],
  );
  const [tableData, setTableData] = React.useState(
    byOrder(
      chartData.chart_data,
      [
        o =>
          o.dist.find(
            bcd =>
              bcd.xlabel[locale] ===
              chartData.chart_data[0].dist[0].xlabel[locale],
          ).total,
      ],
      ['asc'],
    ),
  );

  const handleHeaderClick = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    const sorted = byOrder(
      chartData.chart_data,
      [o => o.dist.find(bcd => bcd.xlabel[locale] === property).total],
      [isAsc ? 'desc' : 'asc'],
    );
    setTableData(sorted);
  };

  return (
    <TableContainer style={{ background: 'inherit' }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell
              align="center"
              colSpan={chartData.chart_data[0].dist.length}
              style={{
                padding: '0',
                borderBottom: '1px solid #bababa',
              }}
            >
              Sectors
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            {chartData.chart_data[0].dist.map(sector => (
              <TableCell
                key={uid(sector)}
                align="right"
                sortDirection={
                  orderBy === sector.xlabel[locale] ? order : false
                }
              >
                <TableSortLabel
                  classes={{ icon: classes.icon }}
                  active={sector.xlabel[locale] === orderBy}
                  direction={orderBy === sector.xlabel[locale] ? order : 'asc'}
                  onClick={e => handleHeaderClick(e, sector.xlabel[locale])}
                >
                  {sector.xlabel[locale]}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={uid(row, index)}
              style={{
                background: `${index % 2 === 0 ? 'rgba(0,0,0,0.1)' : ''}`,
              }}
            >
              <TableCell component="th" scope="row">
                {row.ylabel[locale]}
              </TableCell>
              {row.dist.map(ab => (
                <TableCell key={uid(ab)} align="right">
                  {Math.round(ab.percoftotal * 100)}%
                  <br />
                  <span style={{ opacity: '0.6' }}>{ab.total}</span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CrosstabTable.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default memo(CrosstabTable);
