import { Injectable } from '@nestjs/common';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { bcrypt } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private utilisateurService: UtilisateurService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.utilisateurService.connect(login);
    const match = await bcrypt.compare(pass, user.password);
    if (user && match) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
