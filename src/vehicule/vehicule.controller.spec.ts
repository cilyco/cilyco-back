import { Test, TestingModule } from '@nestjs/testing';
import { VehiculeController } from './vehicule.controller';

describe('VehiculeController', () => {
  let controller: VehiculeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiculeController],
    }).compile();

    controller = module.get<VehiculeController>(VehiculeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
