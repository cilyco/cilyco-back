import { Test, TestingModule } from '@nestjs/testing';
import { AnimationController } from './animation.controller';

describe('AnimationController', () => {
  let controller: AnimationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimationController],
    }).compile();

    controller = module.get<AnimationController>(AnimationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
