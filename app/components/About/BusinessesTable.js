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

const businessesDistribution = [
  {
    title: 'Hotel ',
    count: 29,
  },
  {
    title: 'Travel and tour operations',
    count: 20,
  },
  {
    title: 'Trekking ',
    count: 16,
  },
  {
    title: 'Handicraft ',
    count: 12,
  },
  {
    title: 'Restaurant and Bar',
    count: 11,
  },
  {
    title: 'Shop/Merchandise',
    count: 11,
  },
  // {
  //   title: 'Rafting',
  //   count: 2,
  // },
  // {
  //   title: 'Mountaineering',
  //   count: 1,
  // },
  {
    title: 'Others',
    count: 13,
  },
];

export default function BusinessesTable() {
  const classes = useStyles();

  const getTotal = () => {
    return businessesDistribution.reduce((acc, obj) => {
      return acc + obj.count;
    }, 0);
  };

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
          {businessesDistribution.map((row, index) => (
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
          <TableRow>
            <TableCell component="th" scope="row" />
            <TableCell align="right">
              <span
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  color: '#696969',
                }}
              >
                total
              </span>
              &nbsp;
              <span>{getTotal()}</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
