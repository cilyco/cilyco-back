import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Utilisateur } from '@prisma/client';
import { bcrypt } from 'bcrypt';

@Injectable()
export class UtilisateurService {
  constructor(private prisma: PrismaService) {}

  async create(data: Utilisateur): Promise<Utilisateur> {
    data.password = bcrypt.hash(data.password, 8);
    return this.prisma.utilisateur.create({
      data,
    });
  }

  async users(): Promise<Utilisateur[]> {
    return this.prisma.utilisateur.findMany();
  }

  async connect(login: string): Promise<Utilisateur | null> {
    return this.prisma.utilisateur.findFirst({
      where: {
        login,
      },
    });
  }
}
