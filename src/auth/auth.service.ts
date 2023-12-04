import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcryptjs from 'bcryptjs';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Student } from './entities/student.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Student.name)
    private studentModel: Model<Student>,
    private jwtService: JwtService,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    try {
      const { password, ...studentData } = createStudentDto;

      const newStudent = new this.studentModel({
        password: bcryptjs.hashSync(password, 10),
        ...studentData,
      });

      await newStudent.save();

      const { password: _, ...user } = newStudent.toJSON();

      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `${createStudentDto.email} is already register`,
        );
      }
      throw new InternalServerErrorException('something went wrong');
    }
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const student = await this.studentModel.findOne({ email });

    if (!student) throw new UnauthorizedException('invalid credentials');

    if (bcryptjs.compareSync(password, student.password))
      throw new UnauthorizedException('invalid credentials');

    const { password: _, ...rest } = student.toJSON();

    return {
      student: rest,
      token: this.getJwtToken({ id: student.id }),
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.signAsync(payload);

    return token;
  }
}
