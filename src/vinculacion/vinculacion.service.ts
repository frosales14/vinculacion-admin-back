import { Injectable } from '@nestjs/common';
import { CreateVinculacionDto } from './dto/create-vinculacion.dto';
import { UpdateVinculacionDto } from './dto/update-vinculacion.dto';

@Injectable()
export class VinculacionService {
  create(createVinculacionDto: CreateVinculacionDto) {
    return 'This action adds a new vinculacion';
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
