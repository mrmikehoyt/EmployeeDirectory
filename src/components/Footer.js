import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';



const Footer = () => {

	const handleClick = () => {
		window.open('https://github.com/mrmikehoyt/Employee-Directory/');
	};

	return (
		<div>
			<Chip
			
        avatar={<Avatar>M</Avatar>}
        label="Michael Hoyt"
        clickable
				color="primary"
				onClick={handleClick}
        deleteIcon={<DoneIcon />}
      />
		</div>
	);
}

export default Footer;