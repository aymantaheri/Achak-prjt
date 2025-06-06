import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RedisModule } from 'nestjs-redis';
import { UserModule } from './user.module';
import { FavoriteModule } from './favorite.module';
import { NotificationModule } from './notification.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/user'),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
          },
          consumer: {
            groupId: 'user-consumer',
          },
        },
      },
    ]),
    RedisModule.register({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    }),
    UserModule,
    FavoriteModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
