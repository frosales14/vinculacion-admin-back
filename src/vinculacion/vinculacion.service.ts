import { Injectable } from '@nestjs/common';
import { CreateVinculacionDto } from './dto/create-vinculacion.dto';
import { UpdateVinculacionDto } from './dto/update-vinculacion.dto';
import { Vinculacion } from './entities/vinculacion.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VinculacionService {
  constructor(
    @InjectModel(Vinculacion.name)
    private vinculacionModel: Model<Vinculacion>,
  ) {}

  async create(createVinculacionDto: CreateVinculacionDto) {
    console.log(createVinculacionDto);
    const newVinculacion = new this.vinculacionModel({
      ...createVinculacionDto,
    });

    await newVinculacion.save();

    return newVinculacion.toJSON();
  }

  findAll() {
    return `This action returns all vinculacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vinculacion`;
  }

  update(id: number, updateVinculacionDto: UpdateVinculacionDto) {
    return `This action updates a #${id} vinculacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} vinculacion`;
  }
}
