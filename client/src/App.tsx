import React from 'react';
import {Rooms} from "./components/rooms";
import {Sidebar} from "./modules";

export const App:React.FC = () => {
	return (
		<div className="App">
			<div className="container">
				<Sidebar />
				<div>content</div>
			</div>
		</div>
	);
}
