import { Module } from '@nestjs/common';
import { AnimationService } from './animation.service';
import { AnimationController } from './animation.controller';

@Module({
  providers: [AnimationService],
  controllers: [AnimationController],
})
export class AnimationModule {}
