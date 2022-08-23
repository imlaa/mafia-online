import React from 'react';
import classes from './sidebar-item.module.scss';

interface SidebarItemProps {
	title: string
}

const SidebarItem:React.FC<SidebarItemProps> = React.memo(({ title }) => {
	return (
		<div className={classes.sidebar_item}>
			item
		</div>
	);
});
