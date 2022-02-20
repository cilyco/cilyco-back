import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Agent } from '@prisma/client';

@Injectable()
export class AgentService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AgentCreateInput): Promise<Agent> {
    return this.prisma.agent.create({
      data,
    });
  }

  async findAll(): Promise<Agent[] | null> {
    return this.prisma.agent.findMany();
  }

  async update(params: {
    where: Prisma.AgentWhereUniqueInput,
    data: Prisma.AgentUpdateInput,
  }) {
    const { data, where } = params;
    return this.prisma.agent.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.ResidentWhereUniqueInput) {
    return this.prisma.agent.delete({
      where,
    });
  }
}
