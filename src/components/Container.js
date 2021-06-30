import ContainerHeader from "./ContainerHeader"
import ContainerFooter from "./ContainerFooter"
import ContainerMain from "./ContainerMain"
import StatusChip from "./StatusChip";


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
      editable: true,
      renderCell: (params) => (<StatusChip label={params.getValue(params.id, 'status')}/>)
    },
    {
      field: 'automation',
      headerName: 'Automation',
      flex: 1,
      editable: true,
    }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', status: 'Sold'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', status: 'Quoted No Contact'},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', status: 'Interested'},
    { id: 4, lastName: 'Stark', firstName: 'Arya', status: 'Low Interest'},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', status: 'Dead'},
    { id: 6, lastName: 'Melisandre', firstName: null, status: 'X Date Follow Up'},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', status: 'Sold'},
    { id: 8, lastName: 'Frances', firstName: 'Rossini', status: 'Sold'},
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', status: 'Sold'},
  ];
  

const Container = () => {
    return (
        <> 
            <ContainerHeader/>
            <ContainerMain columns={columns} rows={rows}/>
            <ContainerFooter/>
        </>
    )
}

export default Container
