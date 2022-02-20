import { Module } from '@nestjs/common';
import { ChambreService } from './chambre.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [ChambreService, PrismaService],
})
export class ChambreModule {}
