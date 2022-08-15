import React from 'react';
import { Logo } from '../Logo';
import { DateNow } from '../DateNow';
import { Navbar } from '../Navbar';
export const AppHeader = () => {
	return (
		<div className="AppHeader">
			<div className="left">
				<Logo />
			</div>
			<div className="center">
				<Navbar />
			</div>
			<div className="right">
				<DateNow />
			</div>
		</div>
	);
};
