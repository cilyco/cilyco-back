import { Global, Module } from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { ResidentsController } from './residents.controller';
import { PrismaService } from '../prisma.service';
import { ContactService } from '../contact/contact.service';
import { ChambreService } from '../chambre/chambre.service';

@Global()
@Module({
  imports: [],
  controllers: [ResidentsController],
  providers: [ResidentsService, ContactService, ChambreService, PrismaService],
  exports: [ResidentsService],
})
export class ResidentsModule {}
