import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AnimationService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.Animation): Promise<Animation> {
    return this.prisma.animation.create({
      data,
    });
  }
}
