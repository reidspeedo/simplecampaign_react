import { Chip } from "@material-ui/core"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));


const StatusChip = ({params, status, statusHandleChange}) => {
    const classes = useStyles();

    return (
    <FormControl className={classes.formControl}>
        <Select
            IconComponent={()=>''}
            value={status}
            onChange={(e) => statusHandleChange(e, params.id)}
        >
          <MenuItem value={'Quoted No Contact'}>
            <Chip label={'Quoted No Contact'} variant='outlined' size='small' style={{borderColor: '#8E7CC3', backgroundColor: '#D1C9E7'}} icon={<FormatQuoteIcon/>}/>
          </MenuItem>
          <MenuItem value={'Sold'}>
            <Chip label={'Sold'} variant='outlined' size='small' style={{borderColor: '#34A854', backgroundColor: '#BDE2C7'}} icon={<AccessibilityNewIcon/>}/>
          </MenuItem>
          <MenuItem value={'Interested'}>
            <Chip label={'Interested'} variant='outlined' size='small' style={{borderColor: '#4185F4', backgroundColor: '#C1D7FB'}} icon={<PriorityHighIcon/>}/>
          </MenuItem>
          <MenuItem value={'Low Interest'}>
            <Chip label={'Low Interest'} variant='outlined' size='small' style={{borderColor: '#FBBC04', backgroundColor: '#FDE9AD'}} icon={<LowPriorityIcon/>}/>
          </MenuItem>
          <MenuItem value={'Dead'}>
            <Chip label={'Dead'} variant='outlined' size='small' style={{borderColor: '#EA4435', backgroundColor: '#F8C1BD'}} icon={<NotInterestedIcon/>}/>
          </MenuItem>
          <MenuItem value={'X Date Follow Up'}>
            <Chip label={'X Date Follow Up'} variant='outlined' size='small' style={{borderColor: '#FEFF03', backgroundColor: '#FEFFAC'}} icon={<EventBusyIcon/>}/>
          </MenuItem>
        </Select>
      </FormControl>
    )
}

export default StatusChip
