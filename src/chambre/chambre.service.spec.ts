import { Test, TestingModule } from '@nestjs/testing';
import { ChambreService } from './chambre.service';

describe('ChambreService', () => {
  let service: ChambreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChambreService],
    }).compile();

    service = module.get<ChambreService>(ChambreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
