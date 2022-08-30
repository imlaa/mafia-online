import React from 'react';
import classes from './sidebar.module.scss';

import {Logo} from '../../components';
import {RoutesEnum} from "../../routes";
import {SidebarItem} from "./sidebar-item";
import {ILink} from "../../models";

const sidebarItemsArray:ILink[] = [
	{title: 'Rooms', link: RoutesEnum.ROOMS},
	{title: 'Rules', link: RoutesEnum.RULES},
	{title: 'Account', link: RoutesEnum.ACCOUNT},
];

export const Sidebar:React.FC = () => {
	const renderSidebarItemsCallback = () =>
		sidebarItemsArray.map(link => <SidebarItem key={link.title} link={link.link} title={link.title} />)

	return (
		<aside className={classes.sidebar}>
			<Logo />

			{renderSidebarItemsCallback()}
		</aside>
	);
};
