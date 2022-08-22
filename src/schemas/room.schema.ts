import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
	@Prop()
	title: string;

	@Prop()
	password: number;

	@Prop()
	gameType: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);