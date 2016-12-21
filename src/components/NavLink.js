import React from 'react';
import {Link} from 'react-router';

const NavLink = (props) => {
	if (props.route === props.to.slice(1)) {
		return <span>{props.label}</span>;
	}
	return <Link to={props.to}>{props.label}</Link>
};

export default NavLink;