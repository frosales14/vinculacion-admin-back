import { Module } from '@nestjs/common';
import { VinculacionService } from './vinculacion.service';
import { VinculacionController } from './vinculacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Vinculacion, VinculacionSchema } from './entities/vinculacion.entity';

@Module({
  controllers: [VinculacionController],
  providers: [VinculacionService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Vinculacion.name,
        schema: VinculacionSchema,
      },
    ]),
  ],
})
export class VinculacionModule {}
