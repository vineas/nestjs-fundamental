import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BwaProductController } from './bwa-product/bwa-product.controller';
import { BwaProductService } from './bwa-product/bwa-product.service';

@Module({
  imports: [],
  controllers: [AppController, BwaProductController],
  providers: [AppService, BwaProductService],
})
export class AppModule {}
