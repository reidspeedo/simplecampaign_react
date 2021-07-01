import { theme } from '../Theme.js';
import ContainerHeader from "./ContainerHeader"
import ContainerFooter from "./ContainerFooter"
import StatusChip from "./StatusChip";
// import { DataGrid } from '@material-ui/data-grid';
import { XGrid } from "@material-ui/x-grid";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

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
  }
}
)

const Container = () => {
    const classes = useStyles();
    const [columns, setColumns] = useState(
      [
        { field: 'id',
          headerName: 'ID',
          flex: .3,
        
        },
        {
          field: 'firstName',
          headerName: 'First Name',
          flex: 1,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last Name',
          flex: 1,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          flex: 1,
          editable: true,
          valueGetter: (params) => 
              `${params.getValue(params.id, 'firstName') || ''}.${params.getValue(params.id, 'lastName')|| ''}@email.com` 
        },
        {
          field: 'phoneNumber',
          headerName: 'Phone',
          flex: 1,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          flex: 2,
          editable: true,
          renderCell: (params) => (<StatusChip statusHandleChange={statusHandleChange} params={params} status={params.getValue(params.id, 'status')}/>)
        },
        {
          field: 'automation',
          headerName: 'Automation',
          flex: 2,
          editable: true,
        }
      ]
    )


    const [rows, setRows] = useState([
        { id: 1, lastName: 'Snow', firstName: 'Jon', status: 'Sold'},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', status: 'Quoted No Contact'},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', status: 'Interested'},
        { id: 4, lastName: 'Stark', firstName: 'Arya', status: 'Low Interest'},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', status: 'Dead'},
        { id: 6, lastName: 'Melisandre', firstName: null, status: 'X Date Follow Up'},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', status: 'Sold'},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', status: 'Sold'},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', status: 'Sold'},
    ])

    const statusHandleChange = (e ,id) => {
      setRows(rows.map((row) => row.id === id ? {...row, status: e.target.value}: row))
    };


    return (
        <> 
            <ContainerHeader/>
            <div className='container-main' style={{ height: '100%', width: '100%' }}>
              <div className={classes.root}  style={{ height: '100%', width: '100%' }}>
                <XGrid
                    rows = {rows}
                    columns = {columns}
                    rowHeight={30}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowClassName={(params) =>
                    `super-app-theme--${params.getValue(params.id, 'status')}`}
                />
              </div>
            </div>
            <ContainerFooter/>
        </>
    )
}

export default Container
