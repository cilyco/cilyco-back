import { Module } from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { ResidentsController } from './residents.controller';
import {AppModule} from "../app.module";
import { PrismaService } from '../prisma.service';
import {ContactService} from "../contact/contact.service";

@Module({
	imports: [],
	controllers: [ResidentsController],
	providers: [ResidentsService, ContactService, PrismaService],
})

export class ResidentsModule {}
