import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ResidentsService } from './residents.service';
import {
  Resident as ResidentModel,
  Contact as ContactModel,
  Chambre as ChambreModel,
} from '@prisma/client';
import { ContactService } from '../contact/contact.service';
import { ChambreService } from '../chambre/chambre.service';

@Controller('resident')
export class ResidentsController {
  constructor(
    private readonly residentsService: ResidentsService,
    private readonly contactService: ContactService,
    private readonly chambreService: ChambreService,
  ) {}

  @Post()
  create(@Body() createResidentDto: ResidentModel) {
    return this.residentsService.create(createResidentDto);
  }

  @Post(':id/contact')
  async createContact(@Param('id', ParseIntPipe) id: number, @Body() createContactDto: ContactModel) {
    return this.contactService.create({...createContactDto, residentId: id});
  }

  @Post(':id/chambre')
  createChambre(@Param('id', ParseIntPipe) id: number, @Body() createChambreDto: ChambreModel) {
    return this.chambreService.create({ ...createChambreDto, residentId: id});
  }

  @Get()
  findAll() {
    return this.residentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.residentsService.findOne({ id });
  }

  @Get(':id/all')
  findOneWithAllData(@Param('id', ParseIntPipe) id: number) {
    return this.residentsService.findOneWithAllData({ id });
  }

  @Get(':id/contact')
  findResidentContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.findForResident(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateResidentDto: ResidentModel) {
    return this.residentsService.update({
      where: { id },
      data: updateResidentDto,
    });
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.residentsService.remove({ id});
  }
}
