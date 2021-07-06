import ViewQuiltRoundedIcon from '@material-ui/icons/ViewQuiltRounded';
import Button from '@material-ui/core/Button';
import BlurOnRoundedIcon from '@material-ui/icons/BlurOnRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from "@material-ui/core";
import { GridToolbarColumnsButton, GridToolbarDensitySelector, GridToolbarFilterButton, GridToolbarExport } from "@material-ui/x-grid";

const useStyles = makeStyles({
    root: {
        fontSize: 'small',
        margin: '3pt',
        color: '#7976FF',
        backgroundColor: '#FFFFFF',
        '&:hover': {
            color: 'white',
            backgroundColor: '#7976FF',
         },
    },
})


const ContainerHeader = ({addRow}) => {
    const classes = useStyles();

    return (
            <div className='container-header'>
                <div className='container-header-left'>
                    <Button onClick={() => addRow()} size='small' startIcon={<AddBoxRoundedIcon/>} className={classes.root}>Row</Button>
                    <GridToolbarColumnsButton startIcon={<ViewQuiltRoundedIcon/>} className={classes.root}/>
                    <GridToolbarDensitySelector startIcon={<BlurOnRoundedIcon/>} className={classes.root}/>
                    <GridToolbarFilterButton className={classes.root}/>
                    <GridToolbarExport startIcon={<ExitToAppRoundedIcon/>} className={classes.root}/>
                    <Button size='small' startIcon={<SaveIcon/>} className={classes.root}>Save</Button>
                </div>
            </div>
        
    )
}

export default ContainerHeader
