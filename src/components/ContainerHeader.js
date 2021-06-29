import MyButton from "./MyButton"
import SearchBar from 'material-ui-search-bar';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear'
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        boxSizing: 'border-box',
        boxShadow: 'none',
        borderColor: '#7976FF',
        border: 'solid',
        borderWidth: '1pt',
        marginRight: '5%',
        height: '25pt',
    },
    icons: {
        fontSize: 20,
        color: '#7976FF',
        paddingLeft: 0,
    },
    inputs: {
        marginTop: '1%',
        fontSize: 14,
        fontFamily: '"Lucida Console", "Courier New", monospace'
    }
})

const ContainerHeader = () => {
    const classes = useStyles();

    return (
            <div className='container-header'>
                <div className = 'container-header-left'>
                    <MyButton text={'Add'}/>
                    <MyButton text={'Edit All'}/>
                    <MyButton text={'Update'}/>
                    <MyButton text={'Lookup'}/>
                </div>
                <div>
                    <SearchBar
                    closeIcon={<ClearIcon className={classes.icons}/>} 
                    searchIcon={<SearchIcon className={classes.icons}/>} 
                    inputProps={{className: classes.inputs}} placeholder='' className={classes.root}/>
                </div>
            </div>
        
    )
}

export default ContainerHeader
