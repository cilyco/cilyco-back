import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Vehicule } from '@prisma/client';

@Injectable()
export class VehiculeService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.VehiculeUncheckedCreateInput): Promise<Vehicule> {
    return this.prisma.vehicule.create({
      data,
    });
  }

  async findAll(): Promise<Vehicule[] | null> {
    return this.prisma.vehicule.findMany();
  }

  async findOne(vehiculeWhereUniqueInput: Prisma.VehiculeWhereUniqueInput) {
    return this.prisma.vehicule.findUnique({
      where: vehiculeWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.VehiculeWhereUniqueInput,
    data: Prisma.VehiculeUpdateInput
  }) {
    const { data, where } = params;
    return this.prisma.vehicule.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.VehiculeWhereUniqueInput) {
    return this.prisma.vehicule.delete({
      where,
    });
  }

}
