import ContainerHeader from "./ContainerHeader"
import ContainerFooter from "./ContainerFooter"
import StatusChip from "./StatusChip";
import { XGrid } from '@material-ui/x-grid';
import { useState } from "react";


const Container = () => {

    const [columns, setColumns] = useState(
      [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'firstName',
          headerName: 'First Name',
          flex: 0,
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
          flex: 1.7,
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
          flex: 1.7,
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
            <XGrid
                rows = {rows}
                columns = {columns}
                rowHeight={30}
                checkboxSelection
                disableSelectionOnClick
            />
            </div>
            <ContainerFooter/>
        </>
    )
}

export default Container
