import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {ResidentsModule} from "../resident/residents.module";
import {ResidentsController} from "../resident/residents.controller";
import {ResidentsService} from "../resident/residents.service";
import { ContactService } from "./contact.service";

@Module({
    providers: [ContactService, PrismaService],
})

export class ContactsModule {}