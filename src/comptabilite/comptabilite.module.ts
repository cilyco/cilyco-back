import { Module } from '@nestjs/common';
import { ComptabiliteService } from './comptabilite.service';
import { ComptabiliteController } from './comptabilite.controller';

@Module({
  providers: [ComptabiliteService],
  controllers: [ComptabiliteController]
})
export class ComptabiliteModule {}
