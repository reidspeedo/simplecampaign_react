import Button from "./Button"
import SearchBar from 'material-ui-search-bar';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        boxSizing: 'border-box',
        boxShadow: 'none',
        fontSize: '1px',
        borderColor: '#7976FF',
        border: 'solid',
        borderWidth: '1pt',
        marginRight: '5%',
        height: '25pt',
    }
})

const Container = () => {
    const classes = useStyles();    
    return (
        <>
            <div className='container-header'>
                <div>
                    <Button text={'Add'}/>
                    <Button text={'Edit All'}/>
                    <Button text={'Update'}/>
                    <Button text={'Lookup'}/>
                </div>
                <div>
                    <SearchBar style={{fontSize: '1pt'}}placeholder='' className={classes.root}/>
                </div>
            </div>
            <div className='container-main'>container-main</div>
            <div className='container-footer'>container-footer</div>
        </>
    )
}

export default Container
