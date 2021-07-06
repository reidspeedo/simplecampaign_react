import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";


const MyButton = ({text}) => {
    const useStyles = makeStyles({
        root: {
            fontFamily: '"Lucida Console", "Courier New", monospace',
            fontWeight: 'bold',
            color: '#7976FF',
            borderColor: '#7976FF',
            height: '15pt',
            '&:hover': {
                color: 'white',
                backgroundColor: '#7976FF',
             },
        }
    })

    const classes = useStyles()
    // style={{borderColor: color, color: color}}
    return (
        <Button variant='outlined' className={classes.root}>{text}</Button>
        // <button style={{backgroundColor: color}} className='btn'>{text}</button>     
    )
}

MyButton.defaultProps = {
    text: 'Click',
}

export default MyButton
