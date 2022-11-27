import { Controller, Post } from '@nestjs/common';
import { AnimationService } from './animation.service';

@Controller('animation')
export class AnimationController {
  constructor(private readonly animationService: AnimationService) {}

  @Post()
  create() {
    this.animationService.create();
  }

}
