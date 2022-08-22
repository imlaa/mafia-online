import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import {RoomsModule} from './rooms/rooms.module';

@Module({
  imports: [
      MongooseModule.forRoot(process.env.DB_CONNECTION_TOKEN),
      RoomsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
