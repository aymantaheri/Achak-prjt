import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  name?: string;

  @Prop()
  preferences?: string;

  @Prop({ type: [Types.ObjectId], ref: 'Listing' })
  favorites: Types.ObjectId[];

  @Prop({ type: [String] })
  history: string[];
}

export const UserSchema = SchemaFactory.createForClass(User); 