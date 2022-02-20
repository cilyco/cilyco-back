import { Test, TestingModule } from '@nestjs/testing';
import { VehiculeService } from './vehicule.service';

describe('VehiculeService', () => {
  let service: VehiculeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiculeService],
    }).compile();

    service = module.get<VehiculeService>(VehiculeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
