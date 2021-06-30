import { Chip } from "@material-ui/core"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';


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

const StatusChip = ({label}) => {
    const [icon, border, background] = styleStatus(label)
    return (
        <Chip label={label} variant='outline' size='small' style={{borderColor: border, backgroundColor: background}} icon={icon}/>
    )
}

export default StatusChip
