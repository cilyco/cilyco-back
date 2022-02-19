import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResidentsService } from './resident/residents.service';
import { ResidentsController } from './resident/residents.controller';
import { ResidentsModule } from './resident/residents.module';
import { PrismaService } from './prisma.service';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [PrismaService, ResidentsModule, ContactModule],
  controllers: [AppController],
  providers: [AppService, ContactService],
})
export class AppModule {}
