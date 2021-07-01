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


// const styleStatus = (status) => {
//     switch (status) {
//         // Icon, BackgroundColor, BorderColor, FontColor]
//         case "Quoted No Contact":
//             return [<FormatQuoteIcon/>, '#8E7CC3', '#D1C9E7']
//         case "Sold":
//             return [<AccessibilityNewIcon/>, '#34A854', '#BDE2C7']
//         case "Interested":
//             return [<PriorityHighIcon/>, '#4185F4', '#C1D7FB']
//         case "Low Interest":
//             return [<LowPriorityIcon/>, '#FBBC04', '#FDE9AD']
//         case "Dead":
//             return [<NotInterestedIcon/>, '#EA4435', '#F8C1BD']
//         case "X Date Follow Up":
//             return [<EventBusyIcon/>, '#FEFF03', '#FEFFAC']
//         default:
//             return [<FormatQuoteIcon/>, '#8E7CC3', '#D1C9E7']
//     }
// }

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const StatusChip = ({id, label, handleChange}) => {
    // const [icon, border, background] = styleStatus(label)

    const classes = useStyles();

    return (
    <FormControl className={classes.formControl}>
        <Select
            IconComponent={()=>''}
            value={label}
            onChange={() => handleChange(id)}
        >
          <MenuItem dense={true} value={'Quoted No Contact'}><Chip label={'Quoted No Contact'} variant='outline' size='small' style={{borderColor: '#8E7CC3', backgroundColor: '#D1C9E7'}} icon={<FormatQuoteIcon/>}/></MenuItem>
          <MenuItem dense={true} value={'Sold'}><Chip label={'Sold'} variant='outline' size='small' style={{borderColor: '#34A854', backgroundColor: '#BDE2C7'}} icon={<AccessibilityNewIcon/>}/></MenuItem>
          <MenuItem dense={true} value={'Interested'}><Chip label={'Interested'} variant='outline' size='small' style={{borderColor: '#4185F4', backgroundColor: '#C1D7FB'}} icon={<PriorityHighIcon/>}/></MenuItem>
          <MenuItem dense={true} value={'Not Interested'}><Chip label={'Not Interested'} variant='outline' size='small' style={{borderColor: '#FBBC04', backgroundColor: '#FDE9AD'}} icon={<LowPriorityIcon/>}/></MenuItem>
          <MenuItem dense={true} value={'Dead'}><Chip label={'Dead'} variant='outline' size='small' style={{borderColor: '#EA4435', backgroundColor: '#F8C1BD'}} icon={<NotInterestedIcon/>}/></MenuItem>
          <MenuItem dense={true} value={'X Date Follow Up'}><Chip label={'X Date Follow Up'} variant='outline' size='small' style={{borderColor: '#8E7CC3', backgroundColor: '#D1C9E7'}} icon={<EventBusyIcon/>}/></MenuItem>
        </Select>
      </FormControl>
    )
}

export default StatusChip
