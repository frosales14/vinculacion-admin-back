import { Student } from 'src/auth/entities/student.entity';
import { VinculacionState } from '../types/vinculacion.types';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Type } from 'class-transformer';

export type UserDocument = Vinculacion & Document;

export class Vinculacion {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  type: string;
  @Prop({ required: true })
  state: VinculacionState;
  @Prop({ required: true })
  atCharge: string;
  @Prop({ required: true })
  start_date: Date;
  @Prop({ required: true })
  end_date: Date;
  @Prop({ required: true })
  hours: number;
  @Prop({ required: true })
  students_limit: number;
  @Prop({ required: true })
  budget: number;
  @Prop({ required: true })
  description: string;
  @Prop({
    type: [{ type: Types.ObjectId, ref: Student.name }],
  })
  @Type(() => Student)
  students: Student[];
}

export const VinculacionSchema = SchemaFactory.createForClass(Vinculacion);
