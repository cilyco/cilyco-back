import { Test, TestingModule } from '@nestjs/testing';
import { StatistiqueController } from './statistique.controller';

describe('StatistiqueController', () => {
  let controller: StatistiqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatistiqueController],
    }).compile();

    controller = module.get<StatistiqueController>(StatistiqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
