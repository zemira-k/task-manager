import React from 'react';
import { AppInfo } from '../data/dummyData';
import { Link } from 'react-router-dom';

export const Logo = () => {
	const logoName = AppInfo.name;
	return (
		<div className="Logo">
			<Link to="/">
				<h4>
					{logoName.slice(0, 3)}
					<span>{logoName.slice(3)}</span>
				</h4>
			</Link>
		</div>
	);
};
