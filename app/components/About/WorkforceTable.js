import React from 'react';
import { uid } from 'react-uid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginBottom: '1.5rem',
  },
});

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
    // color: 'rgba(255,255,255,0.75)',
  },
})(MuiTableCell);

const workforceDistribution = [
  {
    title: 'Shopkeeper ',
    count: 1,
  },
  {
    title: 'Tour guide',
    count: 53,
  },
  {
    title: 'Trekking guide',
    count: 152,
  },
  {
    title: 'Rafting guide',
    count: 11,
  },
  {
    title: 'Mountain guide',
    count: 29,
  },
  {
    title: 'Driver',
    count: 3,
  },
  {
    title: 'Travel agent',
    count: 8,
  },
  {
    title: 'Flight attendant',
    count: 1,
  },
  {
    title: 'Pilot ',
    count: 1,
  },
  {
    title: 'Chef / cook ',
    count: 11,
  },
  {
    title: 'Hotel manager',
    count: 4,
  },
  {
    title: 'Hotel staff ',
    count: 21,
  },
  {
    title: 'Waiter ',
    count: 4,
  },
  {
    title: 'Bartender ',
    count: 3,
  },
  {
    title: 'Porter ',
    count: 6,
  },
  {
    title: 'Other ',
    count: 15,
  },
];

export default function WorkforceTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                textTransform: 'uppercase',
                fontWeight: '600',
                color: '#696969',
              }}
            >
              Type
            </TableCell>
            <TableCell
              align="right"
              style={{
                textTransform: 'uppercase',
                fontWeight: '600',
                color: '#696969',
              }}
            >
              Count
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workforceDistribution.map((row, index) => (
            <TableRow
              key={uid(row, index)}
              style={{
                background: `${index % 2 === 0 ? 'rgba(0,0,0,0.1)' : ''}`,
              }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
