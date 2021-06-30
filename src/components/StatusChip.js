import { Chip } from "@material-ui/core"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const styleStatus = (status) => {
    switch (status) {
        // Icon, BackgroundColor, BorderColor, FontColor]
        case "Quoted No Contact":
            return [<FormatQuoteIcon/>, '#8E7CC3', '#D1C9E7']
        case "Sold":
            return [<AccessibilityNewIcon/>, '#34A854', '#BDE2C7']
        case "Interested":
            return [<PriorityHighIcon/>, '#4185F4', '#C1D7FB']
        case "Low Interest":
            return [<LowPriorityIcon/>, '#FBBC04', '#FDE9AD']
        case "Dead":
            return [<NotInterestedIcon/>, '#EA4435', '#F8C1BD']
        case "X Date Follow Up":
            return [<EventBusyIcon/>, '#FEFF03', '#FEFFAC']
        default:
            return [<FormatQuoteIcon/>, '#8E7CC3', '#D1C9E7']
    }
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const StatusChip = ({label}) => {
    const [icon, border, background] = styleStatus(label)

    const classes = useStyles();
    const [status, setStatus] = useState('');
  
    const handleChange = (event) => {
      setStatus(event.target.value);
    };

    return (
    <FormControl className={classes.formControl}>
        <Select
            IconComponent={()=>''}
            value={status}
            onChange={handleChange}
        >
          <MenuItem value={'Quoted No Contact'}><Chip label={label} variant='outline' size='small' style={{borderColor: '#D1C9E7', backgroundColor: '#8E7CC3'}} icon={<FormatQuoteIcon/>}/></MenuItem>
          <MenuItem value={'Sold'}>Sold</MenuItem>
          <MenuItem value={'Interested'}>Interested</MenuItem>
          <MenuItem value={'Not Interested'}>Not Interested</MenuItem>
          <MenuItem value={'Dead'}>Dead</MenuItem>
          <MenuItem value={'X Date Follow Up'}>X Date Follow Up</MenuItem>
          
        </Select>
      </FormControl>
    )
}

export default StatusChip
