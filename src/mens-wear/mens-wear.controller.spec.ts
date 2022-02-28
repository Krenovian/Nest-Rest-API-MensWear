import { Test, TestingModule } from '@nestjs/testing';
import { MensWearController } from './mens-wear.controller';

describe('MensWearController', () => {
  let controller: MensWearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensWearController],
    }).compile();

    controller = module.get<MensWearController>(MensWearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
