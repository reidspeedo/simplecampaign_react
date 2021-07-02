import { Chip } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));


const StatusChip = ({params, options, status, statusHandleChange}) => {
    const classes = useStyles();
    return (
    <FormControl className={classes.formControl}>
        <Select
            IconComponent={()=>''}
            value={status}
            onChange={(e) => statusHandleChange(e, params.id)}
        >
          {options.map((option) => 
          {
            return (
            <MenuItem key={option.key} value={option.value}>
                <Chip label={option.value} variant='outlined' size='small' style={{borderColor: option.color, backgroundColor: option.color, color: option.fontcolor}} icon={option.icon}/>  
            </MenuItem>
          )})}
        </Select>
      </FormControl>
    )
}

export default StatusChip
