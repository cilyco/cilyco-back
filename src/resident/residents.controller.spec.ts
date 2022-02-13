import { Test, TestingModule } from '@nestjs/testing';
import { ResidentsController } from './residents.controller';

describe('ResidentController', () => {
  let controller: ResidentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResidentsController],
    }).compile();

    controller = module.get<ResidentsController>(ResidentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
