import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Listing, ListingSchema } from './listing.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Listing.name, schema: ListingSchema }])],
  exports: [MongooseModule],
})
export class ListingModule {} 