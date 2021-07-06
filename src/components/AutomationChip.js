import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  chips: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  chip: {
    backgroundColor: '#F8F9FF',
    borderColor: '#F8F9FF',
    color: '#7976FF'
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(value, automation) {
  return {
    color: 
    (automation.indexOf(value) === -1
        ? '#7976FF'
        : '#F8F9FF'),
    backgroundColor: 
    (automation.indexOf(value) === -1
        ? '#F8F9FF'
        : '#7976FF'),
    borderColor:
    (automation.indexOf(value) === -1
        ? '#7976FF'
        : '#F8F9FF'),
  };
}

export default function AutomationChip({params, automation, options, handleAutomationChange}) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          IconComponent={()=>''}
          multiple
          value={automation}
          onChange={(e) => handleAutomationChange(e, params.id)}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} variant='outlined' size='small' className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value} style={{backgroundColor: '#F8F9FF', overflow: 'hidden'}}>
              <Chip key={option.value} label={option.value} variant='outlined' size='small' style={getStyles(option.value, automation)} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
