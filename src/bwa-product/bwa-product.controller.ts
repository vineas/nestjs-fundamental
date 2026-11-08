import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { BwaProductService } from './bwa-product.service';

@Controller('bwa-product')
export class BwaProductController {
    constructor(private readonly bwaProductService: BwaProductService) { }

    @Get()
    getAllProducts() {
        return this.bwaProductService.getAllProducts();
    }

    @Get('special-offer')
    getSpecialOfferProducts() {
        return this.bwaProductService.getSpecialOfferProducts();
    }

    @Get('in-stock')
    getProductsInStock() {
        return this.bwaProductService.getProductsInStock();
    }

    @Get('calculate-price')
    calculatePrice(@Query('productId', ParseIntPipe) productId: number, @Query('quantity', ParseIntPipe) quantity: number) {
        return this.bwaProductService.calculateTotalPrice(productId, quantity);
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.bwaProductService.getProductById(id);
    }
}