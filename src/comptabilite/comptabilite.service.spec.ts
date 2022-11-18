import { Test, TestingModule } from '@nestjs/testing';
import { ComptabiliteService } from './comptabilite.service';

describe('ComptabiliteService', () => {
  let service: ComptabiliteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComptabiliteService],
    }).compile();

    service = module.get<ComptabiliteService>(ComptabiliteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
