/**
 *
 * MetaTable
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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

function MetaTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ borderBottom: 'none' }}>Variable</TableCell>
            <TableCell style={{ borderBottom: 'none' }} align="right">
              Description
            </TableCell>
            <TableCell style={{ borderBottom: 'none' }} align="right">
              Type
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} style={{ borderTop: '1px solid rgb(224, 224, 224)' }}>
              <TableCell
                style={{ borderBottom: 'none' }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

MetaTable.propTypes = {};

export default memo(MetaTable);
