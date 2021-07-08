
import { DataGrid } from '@material-ui/data-grid'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Options from './Options';
import DialogForm from './DialogForm';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    root: {
        '& .MuiButton-root': {
        fontSize: 'small',
        margin: '3pt',
        color: '#7976FF',
        backgroundColor: '#FFFFFF',
        '&:hover': {
            color: 'white',
            backgroundColor: '#7976FF',
         }},
         '& .super-app-theme--cell': {
            display: 'flex',
            flexWrap: 'scroll',
          },
    },
})

function renderOptions(params) {
    const options = params.getValue(params.id, 'options')
    if (typeof options !== 'undefined') {
        return options.map((option) => {return option.value}).join(', ')
    }
    else {
        return []
    }
}

const ManageFields = ({containerColumns, addFieldtoGrid}) => {
    const classes = useStyles();
    // const rows = [...containerColumns]
    // const [rows] = useState(containerColumns)

    return (
        <>
        <div style={{ height: "100%", width: "100%" }} className={classes.root}>
        <div className='container-header'>
                <div className='container-header-left'>
                <DialogForm addFieldtoGrid={addFieldtoGrid}/>
                <Button size='small' startIcon={<EditIcon/>} className={classes.root}>Edit Field</Button>
                <Button size='small' startIcon={<DeleteForeverRoundedIcon/>} className={classes.root}>Delete Field</Button>
                <Button size='small' startIcon={<SaveIcon/>} className={classes.root}>Save</Button>
                </div>
        </div>
        <DataGrid
            columns={[
                {
                    field: 'field',
                    headerName: 'Field ID',
                    type: 'string',
                    editable: false,
                    width: 300,
                    hide: true,
                },
                {
                    field: 'headerName',
                    headerName: 'Field Name',
                    type: 'string',
                    editable: false,
                    width: 300,
                },
                {
                    field: 'type',
                    headerName: 'Type',
                    type: 'string',
                    editable: false,
                    width: 300,
                },
                {
                    field: 'fieldAlias',
                    headerName: 'Alias',
                    type: 'string',
                    editable: false,
                    width: 300,
                    valueGetter: (params) =>
                    `%${params.getValue(params.id, 'field')}%`.toUpperCase().replace(' ',''),
                },
                {
                    field: 'fieldOptions',
                    headerName: 'Options',
                    type: 'singleSelect',
                    cellClassName: 'super-app-theme--cell',
                    editable: true,
                    width: 300,
                    renderCell: (params) => <Options options={renderOptions(params)}/>
                },
            ]}
            rows={containerColumns}
            checkboxSelection
            rowsPerPageOptions={[]}
            disableSelectionOnClick
        ></DataGrid>
        </div>
    </>
    )
}

export default ManageFields
