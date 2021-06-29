import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { useState } from 'react';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 2,
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid #7976FF',
    fontSize: 12,
    padding: '4px 4px 10px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      borderRadius: 2,
      boxShadow: '0 0 0 0.1rem #aaa9ff',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function ContainerFooter() {
  const classes = useStyles();
  const [row, setRow] = useState('');
  const handleChange = (event) => {
    setRow(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <NativeSelect
          id="demo-customized-select-native"
          value={row}
          onChange={handleChange}
          input={<BootstrapInput />}
        >  
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default ContainerFooter