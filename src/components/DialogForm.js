import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core'; 
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '.MuiDialogContent-root': {
            height: '200px',
        },
        '& .MuiButton-root': {
        fontSize: 'small',
        margin: '3pt',
        color: '#7976FF',
        backgroundColor: '#FFFFFF',
        '&:hover': {
            color: 'white',
            backgroundColor: '#7976FF',
         }}
    },
    formControl: {
        minWidth: 120,
      },
      margin: {
        margin: theme.spacing(1),
      },
    option: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        },
}))


export default function DialogForm({addFieldtoGrid}) {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');
  const [fieldname, setFieldName] = useState('');
  const [optiontext, setOptiontext] = useState('')
  const [options, setOptions] = useState([]);

  function addToOption(optiontext) {
    var id 
    if (options.length === 0) {
        id = 0
    }  else {
        id = options.sort((a, b) => (a.key > b.key) ? -1: 1)[0].key + 1     
    }
    
    var newOptions = options.concat({key: id, value: optiontext })
    setOptions(newOptions)
    setOptiontext('')
  }
  
  const handleOptionTextChange = (event) => {
    setOptiontext(event.target.value);
  }

  const handleChipDelete = (chipToDelete) => () => {
    setOptions((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };


  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  
  const handleFieldNameChange = (event) => {
    setFieldName(event.target.value);
  };

  const handleDialogClickOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setFieldName('');
    setType('');
  };

  const addFieldtoGridWrap = (fieldname, type, options) => {
    addFieldtoGrid(fieldname, type, options);
    handleDialogClose();
  }

  return (
    <div>
      <Button onClick={handleDialogClickOpen} size='small' startIcon={<AddBoxRoundedIcon/>} className={classes.root}>Create Field</Button>
      <Dialog fullWidth={true} open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Field</DialogTitle>
        <DialogContent>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '250pt'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Field Name"
                value={fieldname}
                onChange={handleFieldNameChange}
            />
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={handleTypeChange}>
                    <MenuItem value={'string'}>Text</MenuItem>
                    <MenuItem value={'number'}>Number</MenuItem>
                    <MenuItem value={'boolean'}>Boolean</MenuItem>
                    <MenuItem value={'singleselect'}>Single Select</MenuItem>
                    <MenuItem value={'multiselect'}>Multi Select</MenuItem>
                    <MenuItem value={'date'}>Date</MenuItem>
                    <MenuItem value={'dateTime'}>Date Time</MenuItem>
                </Select>
            </FormControl>
            </div>
            {type === 'singleselect' || type === 'multiselect' ?
            <div>
                <div>
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    id="option"
                    label="Option"
                    value={optiontext}
                    onChange={handleOptionTextChange}
                />
                <Button fullWidth onClick={()=>addToOption(optiontext)} size='small' style={{backgroundColor: '#7976FF', color: 'white', marginBottom: '10pt', marginTop: '10pt',}} className={classes.root}>Add</Button>
                <Paper elevation={3} component="ul" className={classes.option}>
                {options.map((data) => {
                    return (
                    <li key={data.key}>
                        <Chip
                        label={data.value}
                        onDelete={handleChipDelete(data)}
                        className={classes.chip}
                        />
                    </li>
                    );
                })}
                </Paper>
                </div>
            </div> : null
            }
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => addFieldtoGridWrap(fieldname, type, options)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
