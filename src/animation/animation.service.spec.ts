import { Test, TestingModule } from '@nestjs/testing';
import { AnimationService } from './animation.service';

describe('AnimationService', () => {
  let service: AnimationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimationService],
    }).compile();

    service = module.get<AnimationService>(AnimationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
