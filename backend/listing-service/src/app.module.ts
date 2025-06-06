import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RedisModule } from 'nestjs-redis';
import { ListingModule } from './listing.module';
import { ReservationModule } from './reservation.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/listing'),
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
            groupId: 'listing-consumer',
          },
        },
      },
    ]),
    RedisModule.register({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    }),
    ListingModule,
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
