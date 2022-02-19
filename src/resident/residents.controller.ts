import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { Resident as ResidentModel } from '@prisma/client';
import { Contact as ContactModel } from '@prisma/client';
import {ContactService} from "../contact/contact.service";

@Controller('resident')
export class ResidentsController {
    constructor(
        private readonly residentsService: ResidentsService,
        private readonly contactService: ContactService
    ) {}

    @Post()
    create(@Body() createResidentDto: ResidentModel) {
        return this.residentsService.create(createResidentDto);
    }

    @Post(':id/contact')
    createContact(@Param('id', ParseIntPipe) id: number, @Body() createContactDto: ContactModel) {
        return this.contactService.create({id}, createContactDto);
    }

    @Get()
    findAll() {
        return this.residentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.residentsService.findOne({id});
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateResidentDto: ResidentModel) {
        return this.residentsService.update({where: {id}, data: updateResidentDto});
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.residentsService.remove({ id});
    }}
