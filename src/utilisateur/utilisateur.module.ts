import { Global, Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { PrismaService } from '../prisma.service';

@Global()
@Module({
  providers: [UtilisateurService, PrismaService],
  controllers: [UtilisateurController],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
