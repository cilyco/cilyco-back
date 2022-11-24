import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { Vehicule as VehiculeModel } from '@prisma/client';

@Controller('vehicule')
export class VehiculeController {
  constructor(private readonly vehiculeService: VehiculeService) {}

  @Post()
  create(@Body() createVehiculeDto: VehiculeModel) {
    return this.vehiculeService.create(createVehiculeDto);
  }

  @Get()
  findAll() {
    return this.vehiculeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vehiculeService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVehiculeDto: VehiculeModel,
  ) {
    return this.vehiculeService.update({
      where: { id },
      data: updateVehiculeDto,
    });
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vehiculeService.remove({ id });
  }
}
