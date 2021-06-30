import { DataGrid } from '@material-ui/data-grid';


const ContainerMain = ({columns, rows}) => {
  return (
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
  );
}

export default ContainerMain
