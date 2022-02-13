import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResidentsService } from './resident/residents.service';
import { ResidentsController } from './resident/residents.controller';
import { ResidentsModule } from './resident/residents.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [PrismaService, ResidentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
