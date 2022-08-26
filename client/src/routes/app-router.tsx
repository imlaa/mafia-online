import React from 'react';
import {Sidebar} from "../modules";

export const AppRouter:React.FC = () => {
	return (
		<div className="container">
			<Sidebar />

			<div>
				content
			</div>
		</div>
	);
};

