import React, { useState } from 'react'
import Employees from '../data/Employee.json'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button
} from '@material-ui/core';
import Filter from './Filter';

	const useStyles = makeStyles({
		table: {
			minWidth: 650,
		},
	});

	const StyledTableCell = withStyles((theme) => ({
  head: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const myStyles = {
	display: 'flex',
	justifyContent: 'space-evenly',
};

const Results = () => {
	const classes = useStyles();
	const [list, setList] = useState(Employees);

	const sortList = () => {
		const sortedList = [].concat(list);
		sortedList.sort(compare);
		setList(sortedList);
	}

	function compare(a, b) {
		let comparison = 0;
		if (a.data.name > b.data.name) {
			comparison = 1;
		} else if (a.data.name < b.data.name) {
			comparison = -1;
		}

		return comparison;
	}

	//function that filters the list above according to what filter
	// the user selected
	const filterList = (filter) => {
		if (filter !== 'None') {
			setList(Employees.filter((e) => {
				return (e.data.position === filter);
			}))
		} else {
			setList(Employees);
		}
		
	};
	
	return (
		<div>
			<div className='flex-container' style={myStyles}>
					<Button variant="contained" color="secondary" onClick={sortList}>
				Sort by Name
      </Button>
				<Filter handleFilter={filterList}/>
			</div>
			<br /><br />
			<TableContainer component={Paper}>
				<Table className={classes.table} size="medium" aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell align="center">Employee ID</StyledTableCell>
							<StyledTableCell align="center">Name</StyledTableCell>
							<StyledTableCell align="center">Position</StyledTableCell>
							<StyledTableCell align="center">work #</StyledTableCell>
							<StyledTableCell align="center">Email</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{list.map((e) => (
							<StyledTableRow  key={e.id}>
								<StyledTableCell align="center">{e.id}</StyledTableCell>
								<StyledTableCell align="center">{e.data.name}</StyledTableCell>
								<StyledTableCell align="center">{e.data.position}</StyledTableCell>
								<StyledTableCell align="center">{e.data.work}</StyledTableCell>
								<StyledTableCell align="center">{e.data.email}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>

				</Table>
			</TableContainer>
		</div>
	);
};

export default Results;