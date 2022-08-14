import React from 'react';
import { io } from 'socket.io-client';

export const Rooms:React.FC = () => {
	const socket = io('test url');

	return (
		<div>
			
		</div>
	);
};
