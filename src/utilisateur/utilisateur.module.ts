import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';

@Module({
  providers: [UtilisateurService],
  controllers: [UtilisateurController]
})
export class UtilisateurModule {}
