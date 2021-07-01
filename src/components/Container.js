import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ContainerFooter from './ContainerFooter'
import ContainerHeader from './ContainerHeader'
import StatusChip from './StatusChip';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


// function referenceField(fields, id) {
//     return fields.filter(field => field.fieldID === id)
// }

function createRow(fields, row) {
    const headers = fields.map((field) => (!field.hide ? field.fieldID:{}))
    const new_row = {}
    headers.forEach((fieldID) => (row.hasOwnProperty(fieldID) ? new_row[fieldID] = row[fieldID]:{}))
    return new_row
}

const generateRowCells = (row) => {
    var output = []
    for (const key in row) {
        if (key === 'id') {
            output.push(<TableCell>{row[key]}</TableCell>)
        } 
        else if (key === 'status') {
            output.push(<TableCell align='right'><StatusChip label={row[key]}/></TableCell>)
        }
        else {
            output.push(<TableCell align='right'>{row[key]}</TableCell>)
        }
    }
    return output
}

export default function Container() {
  const classes = useStyles();

  const [fields, setFields] = useState(
      [
        {
            fieldName: 'ID',
            fieldID: 'id',
            type: 'text',
            hide: false,
        },
        {
            fieldName: 'First Name',
            fieldID: 'firstname',
            type: 'text',
            hide: false,
        },
        {
            fieldName: 'Last Name',
            fieldID: 'lastname',
            type: 'text',
            hide: false,
        },
        {
            fieldName: 'Email',
            fieldID: 'email',
            type: 'text',
            hide: false,
        },
        {
            fieldName: 'Status',
            fieldID: 'status',
            type: 'dropdown',
            hide: false,
        },
        {
            fieldName: 'Automation',
            fieldID: 'automation',
            type: 'text',
            hide: false,
        },
      ]
  )

  const [rows, setRows] = useState(
    [
        createRow(fields, {id: 1, firstname: 'Reid', lastname: 'Relatores', email: 'rrrelatores@gmail.com', status: 'Quoted No Contact'}),
        createRow(fields, {id: 2, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'Quoted No Contact'}),
        createRow(fields, {id: 3, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'Sold'}),
        createRow(fields, {id: 4, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'Interested'}),
        createRow(fields, {id: 5, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'Low Interest'}),
        createRow(fields, {id: 6, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'X Date Follow Up'}),
        createRow(fields, {id: 7, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'Dead'}),
        createRow(fields, {id: 8, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'Quoted No Contact'}),
        createRow(fields, {id: 9, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'Quoted No Contact'}),
        createRow(fields, {id: 10, firstname: 'Amy', lastname: 'Kwon', email: 'amykwon@gmail.com', status: 'Quoted No Contact'}),

    ]
  )

  return (
    <>
    <ContainerHeader/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {fields.map((field, i) => (                
                !field.hide ? i === 0 ? <TableCell>{field.fieldName}</TableCell> : <TableCell align='right'>{field.fieldName}</TableCell>: null
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                {generateRowCells(row)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ContainerFooter/>
    </>
  );
}
