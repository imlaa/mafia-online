import React from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:80/rooms', { transports : ['websocket'] });

export const Rooms:React.FC = () => {
	// const [isConnected, setIsConnected] = React.useState(socket.connected);
	// const [rooms, setRooms] = React.useState('');
	//
	// React.useEffect(() => {
	// 	socket.on('connect', () => {
	// 		setIsConnected(true);
	// 	});
	//
	// 	socket.on('disconnect', () => {
	// 		setIsConnected(false);
	// 	});
	//
	// 	socket.on('serverRoomsResponse', (data) => {
	// 		console.log('serverRoomsResponse: ', data);
	// 		setRooms('room');
	// 	});
	//
	// 	return () => {
	// 		socket.off('connect');
	// 		socket.off('disconnect');
	// 		socket.off('serverRoomsResponse');
	// 	};
	// }, []);
	//
	// const sentRoomsRequest = () => socket.emit('clientRoomsRequest')

	return (
		<div>
			rooms
		</div>
	);
};
