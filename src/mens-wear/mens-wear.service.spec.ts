import { Test, TestingModule } from '@nestjs/testing';
import { MensWearService } from './mens-wear.service';

describe('MensWearService', () => {
  let service: MensWearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensWearService],
    }).compile();

    service = module.get<MensWearService>(MensWearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
