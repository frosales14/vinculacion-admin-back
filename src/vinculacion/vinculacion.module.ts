import { Module } from '@nestjs/common';
import { VinculacionService } from './vinculacion.service';
import { VinculacionController } from './vinculacion.controller';

@Module({
  controllers: [VinculacionController],
  providers: [VinculacionService],
})
export class VinculacionModule {}
