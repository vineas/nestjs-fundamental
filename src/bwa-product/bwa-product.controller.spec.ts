import { Test, TestingModule } from '@nestjs/testing';
import { BwaProductController } from './bwa-product.controller';

describe('BwaProductController', () => {
  let controller: BwaProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BwaProductController],
    }).compile();

    controller = module.get<BwaProductController>(BwaProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
