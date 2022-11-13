import { Global, Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';

@Global()
@Module({
  providers: [UtilisateurService],
  controllers: [UtilisateurController],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
