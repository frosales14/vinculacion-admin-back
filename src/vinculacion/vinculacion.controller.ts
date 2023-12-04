import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VinculacionService } from './vinculacion.service';
import { CreateVinculacionDto } from './dto/create-vinculacion.dto';
import { UpdateVinculacionDto } from './dto/update-vinculacion.dto';

@Controller('vinculacion')
export class VinculacionController {
  constructor(private readonly vinculacionService: VinculacionService) {}

  @Post()
  create(@Body() createVinculacionDto: CreateVinculacionDto) {
    return this.vinculacionService.create(createVinculacionDto);
  }

  @Get()
  findAll() {
    return this.vinculacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vinculacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVinculacionDto: UpdateVinculacionDto) {
    return this.vinculacionService.update(+id, updateVinculacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vinculacionService.remove(+id);
  }
}
