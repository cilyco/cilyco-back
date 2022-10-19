import { Injectable } from '@nestjs/common';
import {UtilisateurService} from "../utilisateur/utilisateur.service";

@Injectable()
export class AuthService {
    constructor(private utilisateurService: UtilisateurService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.utilisateurService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
