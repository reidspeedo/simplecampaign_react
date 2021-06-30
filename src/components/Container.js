import ContainerHeader from "./ContainerHeader"
import ContainerFooter from "./ContainerFooter"
import StatusChip from "./StatusChip";
import { DataGrid } from '@material-ui/data-grid';
import { useState } from "react";


//First Name, Last Name, Email, Phone, Status, Automations X Date, Notes? 



const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
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
      // type: 'number',
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
      flex: 1,
      editable: false,
      renderCell: (params) => (<StatusChip label={params.getValue(params.id, 'status')}/>)
    },
    {
      field: 'automation',
      headerName: 'Automation',
      flex: 1,
      editable: true,
    }
  ];
  

const Container = () => {
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

    
    const handleChange = (event) => {
        setRows(event.target.value);
      };

    return (
        <> 
            <ContainerHeader/>
            <div className='container-main' style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={30}
                    pageSize={10}
                    disableColumnMenu={true}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
            <ContainerFooter/>
        </>
    )
}

export default Container
