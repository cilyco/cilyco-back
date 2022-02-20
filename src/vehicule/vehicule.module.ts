import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeController } from './vehicule.controller';

@Module({
  providers: [VehiculeService],
  controllers: [VehiculeController]
})
export class VehiculeModule {}
