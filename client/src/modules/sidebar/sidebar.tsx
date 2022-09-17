import React from 'react';
import classes from './sidebar.module.scss';

import { RoutesEnum } from "@/routes";
import { ILink } from "@/models";

import { Logo } from "@/components";
import { SidebarItem } from "./sidebar-item";

const sidebarItemsArray:ILink[] = [
	{ title: 'Rooms', link: RoutesEnum.ROOMS },
	{ title: 'Rules', link: RoutesEnum.RULES },
	{ title: 'Account', link: RoutesEnum.ACCOUNT },
];

export const Sidebar:React.FC = () => {
	const renderSidebarItemsCallback = () =>
		sidebarItemsArray.map(link => <SidebarItem key={link.title} link={link.link} title={link.title} />);

	return (
		<aside className={classes.sidebar}>
			<Logo/>

			<div className={classes.sidebar_items_container}>
				{renderSidebarItemsCallback()}
			</div>
		</aside>
	);
};
