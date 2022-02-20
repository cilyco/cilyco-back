import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeController } from './vehicule.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [VehiculeService, PrismaService],
  controllers: [VehiculeController]
})
export class VehiculeModule {}
