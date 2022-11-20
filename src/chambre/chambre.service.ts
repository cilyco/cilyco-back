import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Chambre } from '@prisma/client';

@Injectable()
export class ChambreService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ChambreUncheckedCreateInput): Promise<Chambre> {
    return this.prisma.chambre.create({
      data,
    });
  }

  async findOne(chambreWhereUniqueInput: Prisma.VehiculeWhereUniqueInput) {
    return this.prisma.chambre.findUnique({
      where: chambreWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.ChambreWhereUniqueInput;
    data: Prisma.ChambreUpdateInput;
  }) {
    const { data, where } = params;
    return this.prisma.chambre.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.ChambreWhereUniqueInput) {
    return this.prisma.chambre.delete({
      where,
    });
  }
}
