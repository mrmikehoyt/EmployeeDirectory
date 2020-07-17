import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = ({ handleFilter }) => {
	const classes = useStyles();
	const positions = ['Tech Lead', 'Cloud Team', 'Project Manager', 'Tech Support'];

	return (
			<FormControl className={classes.formControl}>
        <NativeSelect onChange={(e)=> handleFilter(e.target.value)}>
					<option value='None'>None</option>
        {positions.map((position, i) => <option key={i} value={position}>{position}</option>)}
      </NativeSelect>
      </FormControl>

	);
};

export default Filter;

