import React from 'react';

import {Route, Routes} from 'react-router-dom';

import { Sidebar } from '../modules';

import { publicRoutes } from './routes';

export const AppRouter:React.FC = () => {
	const renderRoutesCallback = () =>
		publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />);

	return (
		<div className="container">
			<Sidebar />

			<Routes>
				{renderRoutesCallback()}
			</Routes>
		</div>
	);
};