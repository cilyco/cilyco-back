import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [AgentService, PrismaService]
})
export class AgentModule {}
