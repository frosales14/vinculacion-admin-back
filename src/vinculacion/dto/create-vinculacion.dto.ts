import { Student } from 'src/auth/entities/student.entity';
import { VinculacionState } from '../types/vinculacion.types';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateVinculacionDto {
  @IsString()
  name: string;
  @IsString()
  type: string;
  @IsString()
  state: VinculacionState;
  @IsString()
  atCharge: string;
  @IsString()
  start_date: string;
  @IsString()
  end_date: string;
  @IsNumber()
  hours: number;
  @IsNumber()
  students_limit: number;
  @IsNumber()
  budget: number;
  @IsString()
  description: string;
  // @ValidateNested()
  // @Type(() => Student)
  // students: Student;
}
