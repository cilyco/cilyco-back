import { Get, Module } from '@nestjs/common';
import { StatistiqueController } from './statistique.controller';

@Module({
  controllers: [StatistiqueController],
})
export class StatistiqueModule {}
