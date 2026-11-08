import { Test, TestingModule } from '@nestjs/testing';
import { BwaProductService } from './bwa-product.service';

describe('BwaProductService', () => {
  let service: BwaProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BwaProductService],
    }).compile();

    service = module.get<BwaProductService>(BwaProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
