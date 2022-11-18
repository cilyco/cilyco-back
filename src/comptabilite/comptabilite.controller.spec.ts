import { Test, TestingModule } from '@nestjs/testing';
import { ComptabiliteController } from './comptabilite.controller';

describe('ComptabiliteController', () => {
  let controller: ComptabiliteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComptabiliteController],
    }).compile();

    controller = module.get<ComptabiliteController>(ComptabiliteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
