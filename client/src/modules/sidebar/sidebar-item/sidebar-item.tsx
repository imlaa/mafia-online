import React from 'react';
import classes from './sidebar-item.module.scss';

import { Link } from 'react-router-dom';

import { ILink } from '@/models';

export const SidebarItem:React.FC<ILink> = React.memo(({ title, link }) => {
	return (
		<Link className={classes.sidebar_item} to={link}>
			{title}
		</Link>
	);
});
