import React from 'react';
import classes from './sidebar.module.scss';

import { Logo } from '../../components';

export const Sidebar:React.FC = () => {
	return (
		<aside className={classes.sidebar}>
			<Logo />
		</aside>
	);
};
