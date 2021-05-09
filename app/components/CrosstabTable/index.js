/**
 *
 * CrosstabTable
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
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
    minWidth: 650,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CrosstabTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  return (
    <TableContainer style={{ background: 'inherit' }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell
              align="center"
              colSpan={4}
              style={{
                padding: '0',
                // borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              Sectors
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Options</TableCell>
            <TableCell align="right">
              <TableSortLabel
                classes={{ icon: classes.icon }}
                active
                direction="asc"
                onClick={() => console.log('kera')}
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                Calories
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              style={{ background: `${index % 2 === 0 ? '#0c495d' : ''}` }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                20%
                <br />
                <span style={{ opacity: '0.6' }}>{row.calories}</span>
              </TableCell>
              <TableCell align="right">
                20%
                <br />
                <span style={{ opacity: '0.6' }}>{row.fat}</span>
              </TableCell>
              <TableCell align="right">
                20%
                <br />
                <span style={{ opacity: '0.6' }}>{row.carbs}</span>
              </TableCell>
              <TableCell align="right">
                20%
                <br />
                <span style={{ opacity: '0.6' }}>{row.protein}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CrosstabTable.propTypes = {};

export default memo(CrosstabTable);
