/**
 *
 * MetaTable
 *
 */

import React, { memo } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import metaData from './data_dictionary';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function MetaTable({ tableName }) {
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
          {metaData[tableName].map(row => (
            <TableRow
              key={uid(row)}
              style={{ borderTop: '1px solid rgb(224, 224, 224)' }}
            >
              <TableCell
                style={{ borderBottom: 'none' }}
                component="th"
                scope="row"
              >
                {row.colName}
              </TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right">
                {row.desc}
              </TableCell>
              <TableCell style={{ borderBottom: 'none', whiteSpace: 'nowrap' }} align="right">
                {row.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

MetaTable.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default memo(MetaTable);
