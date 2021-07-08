import Popper from '@material-ui/core/Popper';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      borderRadius: '5px',
      backgroundColor: '#F8F9FF',
      maxWidth: '200pt',
      fontFamily: '"Lucida Console", "Courier New", monospace;',
    },
  }));


const Options = ({options}) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(null)    
    const [open, setOpen] = useState(false)
    const id = open ? 'simple-popper' : undefined;
    
    const handleHover = (event) => { 
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setValue(event.target.innerText)
        setOpen(!open)
      };

    return (
        <>
        <div onMouseOver={(e)=>handleHover(e)} onMouseLeave={(e)=>handleHover(e)}>
            {options}
        </div>
        <Popper id={id} open={open} anchorEl={anchorEl} placement={'top-start'}>
            <div className={classes.paper}>{value}</div>
        </Popper>
        </>

    )
}

export default Options
