import React from 'react';
import { useCurrentPath } from '../../hooks/useCurrentPath';
import { DateNow } from '../DateNow';
export const AppHeader = () => {
	const path = useCurrentPath()
	return (
		<div className="app-header flex align-center">
			<div className="left flex align-center gap-1">
				<h2 className="page-title">{path}</h2>
				<DateNow />
			</div>
			<div className="right">
			</div>
		</div>
	);
};
