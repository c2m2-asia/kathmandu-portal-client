/**
 *
 * DimensionTable
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
// import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
    maxWidth: 800,
  },
  icon: {
    '& path': {
      fill: 'rgba(255,255,255,0.5)',
    },
  },
});

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
    color: 'rgba(255,255,255,0.75)',
  },
})(MuiTableCell);

function DimensionTable({ chartData }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  // forcefully storing because couldn't find a better way to sort :(
  const data = JSON.parse(JSON.stringify(chartData));

  return (
    <TableContainer style={{ background: 'inherit' }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">
              <TableSortLabel
                classes={{ icon: classes.icon }}
                active
                direction={order}
                onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                Count
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .sort((a, b) =>
              order === 'asc' ? a.total - b.total : b.total - a.total,
            )
            .map((row, index) => (
              <TableRow
                key={uid(row, index)}
                style={{ background: `${index % 2 === 0 ? '#0c495d' : ''}` }}
              >
                <TableCell component="th" scope="row">
                  {row.label_en}
                </TableCell>
                <TableCell align="right">
                  {Math.round(row.perc_of_total * 100)}%
                  <br />
                  <span style={{ opacity: '0.6' }}>{row.total}</span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DimensionTable.propTypes = {
  chartData: PropTypes.array.isRequired,
};

export default memo(DimensionTable);
