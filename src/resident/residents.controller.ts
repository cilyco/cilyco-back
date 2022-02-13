import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { Resident as ResidentModel } from '@prisma/client';

@Controller('resident')
export class ResidentsController {
    constructor(private readonly residentsService: ResidentsService) {}

    @Post()
    create(@Body() createResidentDto: ResidentModel) {
        return this.residentsService.create(createResidentDto);
    }

    @Get()
    findAll() {
        return this.residentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.residentsService.findOne({ id: Number(id) });
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateResidentDto: ResidentModel) {
        return this.residentsService.update({where: { id: Number(id) }, data: updateResidentDto});
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.residentsService.remove({ id: Number(id) });
    }}
