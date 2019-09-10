import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
    backgroundColor: '#b1b1b1'
  },
}));

const styleActive = (bool) =>({
  'color': (bool)?'blue':'red'
})

export default function SimpleTable({data}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name:</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Project_Url</TableCell>
            <TableCell align="right">quantity_developers</TableCell>
            <TableCell align="right">Frameworks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,i) => (
            <TableRow key = {i} >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"
                style = {styleActive(row.active)}>
                {(row.active)?`Active`:`Inactive`}
                </TableCell>
              <TableCell align="right" 
              style={
                {'width': `${row.project_url}`.length}
              }>
                <a href={row.project_url}>
                {row.project_url}
                </a>
                </TableCell>
              <TableCell align="right" 
              style= {
                {'color': (row.quantity_developers<=3)?'blue':
              (row.quantity_developers<=7)?'yellow':'red'}
              }>{row.quantity_developers}</TableCell>
              <TableCell aling="right">
                {`${row.frameworks},`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  'data': PropTypes.arrayOf(
    PropTypes.shape({
    'name' : PropTypes.string.isRequired,
    'active': PropTypes.bool.isRequired,
    'project_url': PropTypes.string.isRequired,
    'quantity_developers': PropTypes.number.isRequired,
    'frameworks': PropTypes.arrayOf(
      PropTypes.shape({
        'items': PropTypes.string.isRequired
      }).isRequired
    ).isRequired 
    }).isRequired
    ).isRequired
}