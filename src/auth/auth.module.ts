import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilisateurModule } from '../utilisateur/utilisateur.module';

@Module({
  providers: [AuthService],
  imports: [UtilisateurModule],
})
export class AuthModule {}
