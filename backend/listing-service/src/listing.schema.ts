import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ListingDocument = Listing & Document;

@Schema({ timestamps: true })
export class Listing {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  address: string;

  @Prop({ type: [String] })
  photos: string[];

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  owner: Types.ObjectId;

  @Prop({ required: true })
  rooms: number;

  @Prop({ type: [Date] })
  unavailableDates: Date[];
}

export const ListingSchema = SchemaFactory.createForClass(Listing); 