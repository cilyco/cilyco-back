import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Utilisateur as UtilsateurModel } from '@prisma/client';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private utilisateurService: UtilisateurService) {}
  @Get()
  users(): any {
    return 'YO';
  }
  @Get(':id')
  user(@Param('id', ParseIntPipe) id: number): any {
    return id;
  }
  @Post()
  createUser(@Body() createUtilsateurDto: UtilsateurModel) {
    return this.utilisateurService.create(createUtilsateurDto);
  }
}
