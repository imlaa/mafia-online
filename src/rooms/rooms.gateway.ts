import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';

@WebSocketGateway(80, { namespace: 'rooms' })
export class RoomsGateway {
	@WebSocketServer() server: Server;

	@SubscribeMessage('clientRoomsRequest')
	handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket,): string {
		this.server.emit('serverRoomsResponse', 'server response message');

		return 'response from rooms';
	}
}
