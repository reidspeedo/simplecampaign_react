import { theme } from '../Theme.js';
import StatusChip from "./StatusChip";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AutomationChip from './AutomationChip.js';
import { Route, Switch } from "react-router-dom";
import Overview from './Overview.js';
import ManageFields from './ManageFields.js';

const useStyles = makeStyles( {
  root: {
    '& .super-app-theme--': {
      fontFamily: theme.palette.typography.fontFamily,
      fontSize: theme.palette.typography.fontSize,
    },
    '& .super-app-theme--Quoted.No.Contact': {
      backgroundColor: theme.palette.secondary.main.quotednocontact,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main.quotednocontacthover,
      },
    },
    '& .super-app-theme--Sold': {
      backgroundColor: theme.palette.secondary.main.sold,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main.soldhover,
      },
    },
    '& .super-app-theme--Interested': {
      backgroundColor: theme.palette.secondary.main.interested,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main.interestedhover,
      },
    },
    '& .super-app-theme--Low.Interest': {
      backgroundColor: theme.palette.secondary.main.lowinterest,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main.lowinteresthover,
      },
    },
    '& .super-app-theme--Dead': {
      backgroundColor: theme.palette.secondary.main.dead,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main.deadhover,
      },
    },
    '& .super-app-theme--X.Date.Follow.Up': {
      backgroundColor: theme.palette.secondary.main.xdate,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main.xdatehover,
      },
    },
    '& .MuiDataGrid-root': {
      fontFamily: '"Lucida Console", "Courier New", monospace;'
    },
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: '#F8F9FF',
      fontSize: 16,
    }
  }
}
)

function updateOrder(params, columns) {
  const target_index = params.targetIndex
  const old_index = params.oldIndex
  if (old_index > target_index) {
    return (columns.map((column) => 
      (column.id === old_index)?
      {
      ...column,
      id: target_index,
      }:
      (column.id >= target_index && column.id < old_index) ?
      {
        ...column,
        id: column.id+1,
      }: column).sort((a, b) => (a.id > b.id) ? 1: -1))
  } else if (target_index > old_index) {
    return (columns.map((column) => 
    (column.id > old_index && column.id <= target_index)?
    {
      ...column,
      id: column.id-1,
    }:
    (column.id === old_index)?
    {
      ...column,
      id: target_index,
    }: column).sort((a, b) => (a.id > b.id) ? 1: -1))
  }
}

const Container = () => {
    const classes = useStyles();


    const [columns, setColumns] = useState(
      [
        { 
          field: 'id',
          headerName: 'ID',
          type: 'number',
          id: 1,
          width: 100,
        },
        {
          field: 'firstName',
          headerName: 'First Name',
          type: 'string',
          editable: true,
          id: 2,
          width: 150,
        },
        {
          field: 'lastName',
          headerName: 'Last Name',
          type: 'string',
          editable: true,
          id: 3,
          width: 150,
        },
        {
          field: 'email',
          headerName: 'Email',
          type: 'string',
          editable: true,
          id: 4,
          width: 250,
        },
        {
          field: 'phoneNumber',
          headerName: 'Phone',
          type: 'string',
          editable: true,
          id: 5,
          width: 140,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'singleselect',
          editable: false,
          id: 6,
          width: 215,
          options: [
            { key: 0, value: 'Quoted No Contact', color: theme.palette.secondary.main.quotednocontacthover, icon: <FormatQuoteIcon/>, fontcolor: '#F8F9FF'},
            { key: 1, value: 'Sold', color: theme.palette.secondary.main.soldhover, icon: <AccessibilityNewIcon/>, fontcolor: '#F8F9FF'},
            { key: 2, value: 'Interested', color: theme.palette.secondary.main.interestedhover, icon: <PriorityHighIcon/>, fontcolor: '#F8F9FF'},
            { key: 3, value: 'Low Interest', color: theme.palette.secondary.main.lowinteresthover, icon: <LowPriorityIcon/>, fontcolor: '#F8F9FF'},
            { key: 4, value: 'Dead', color: theme.palette.secondary.main.deadhover, icon: <NotInterestedIcon/>, fontcolor: '#F8F9FF'},
            { key: 5, value: 'X Date Follow Up', color: theme.palette.secondary.main.xdatehover, icon: <EventBusyIcon/>, fontcolor: '#000000'},
          ],
          renderCell: (params) => (<StatusChip options={referenceFieldData(columns, 'status', 'options')} statusHandleChange={statusHandleChange} params={params} status={params.getValue(params.id, 'status')}/>),
        },
        {
          field: 'automation',
          headerName: 'Automation',
          type: 'multiselect',
          editable: false,
          id: 7,
          width: 350,
          options: [
            {key: 0, value: 'Immediate Contact'},
            {key: 1, value: 'Called - No Answer (w/ Quote)'},
            {key: 2, value: 'X Date Follow Up - Renewal'},
            {key: 3, value: 'Contact Made - Interested (Cold)'},
            {key: 4, value: 'Personal - New (You Know Them)'},
            {key: 5, value: 'Personal - New (Amy Knows Them)'},
            {key: 6, value: 'Custom Message'},
            {key: 7, value: 'Sold'},
          ],
          renderCell: (params) => (<AutomationChip options={referenceFieldData(columns, 'automation', 'options')} handleAutomationChange={handleAutomationChange} params={params} automation={params.getValue(params.id, 'automation')}/>)
        }
      ]
    )
    const [rows, setRows] = useState([
        { id: 1, lastName: 'Snow', firstName: 'Jon', status: 'Sold', automation: ['Immediate Contact']},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', status: 'Quoted No Contact', automation: ['Sold']},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', status: 'Interested', automation: ['Custom Message','Called - No Answer (w/ Quote)']},
        { id: 4, lastName: 'Stark', firstName: 'Arya', status: 'Low Interest', automation: ['Custom Message','Called - No Answer (w/ Quote)']},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', status: 'Dead', automation: ['Immediate Contact','Called - No Answer (w/ Quote)']},
        { id: 6, lastName: 'Melisandre', firstName: null, status: 'X Date Follow Up', automation: ['Custom Message','Called - No Answer (w/ Quote)']},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', status: 'Sold', automation: ['Called - No Answer (w/ Quote)','Immediate Contact']},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', status: 'Sold', automation: ['Immediate Contact','Called - No Answer (w/ Quote)']},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', status: 'Sold', automation: ['Custom Message','Called - No Answer (w/ Quote)']},
    ])

    function referenceFieldData(columns, ref, out) {
      const temp = columns.filter((column) => column.field === ref)[0];
      return temp[out]
    }

    const statusHandleChange = (e ,id) => {
      setRows(rows => rows.map((row) => row.id === id ? 
        {
          ...row,
          status: e.target.value
        } : row
      ))
    };
    
    const handleColumnChange = (params) => {
      setColumns(column => updateOrder(params, column))
    }

    const handleColumnResize = (params) => {
      setColumns(columns => columns.map((column) => column.field === params.colDef.field?
      {
        ...column,
        width: params.width,
      }: column))
    }

    const handleAutomationChange = (e, id) => {
      setRows(rows => rows.map((row) => row.id === id?
      {
        ...row,
        automation: e.target.value
      }: row
      ))
    }

    const handleFieldChange = (params) => {
      setRows(rows => rows.map((row) => row.id === params.id?
      {
        ...row,
        [params.field]: params.props.value,
      }:row))
    }

    function addRow() {
      const obj = {};
      const next_id = Math.max.apply(Math, rows.map(function(o) { return o.id; })) + 1
      for (const column of columns) {
        if (column.type === 'multiselect') {
          obj[column.field] = []
        } else if (column.field === 'id') {
          obj[column.field] =  next_id
        }
        else 
        {
          obj[column.field] = ''
        }
      }
      var newRows = rows.concat(obj)
      setRows(newRows)
    }
    
    return (
        <> 
        <div className='container-main' style={{ height: '100%', width: '100%' }}>
            <div className={classes.root}  style={{ height: '100%', width: '100%' }}>
            <Switch>
              <Route exact path="/">
                    <Overview 
                      columns={columns} 
                      rows={rows} 
                      handleColumnChange={handleColumnChange} 
                      handleColumnResize={handleColumnResize}
                      handleFieldChange={handleFieldChange}
                      addRow={addRow}/>
              </Route>
              <Route exact path="/managefields">
                  <ManageFields columns={columns}/>
              </Route>
              <Route exact path="/import">
                  <div>Import</div>
              </Route>
            </Switch>
            </div>
        </div>
        <div className='container-footer'></div>
        </>
    )
}

export default Container
