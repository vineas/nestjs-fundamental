import { Injectable } from '@nestjs/common';

@Injectable()
export class BwaProductService {
    private products = [
        { id: 1, name: 'Laptop', price: 10000000, stock: 5, specialOffer: true },
        { id: 2, name: 'Mouse', price: 200000, stock: 50, specialOffer: false },
        { id: 3, name: 'Keyboard', price: 500000, stock: 20, specialOffer: true }
    ];

    getAllProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find(product => product.id === id);
    }

    getSpecialOfferProducts() {
        return this.products.filter(product => product.specialOffer === true);
    }

    getProductsInStock() {
        return this.products.filter(product => product.stock > 0);
    }

    calculateTotalPrice(productId: number, quantity: number) {
        const product = this.getProductById(productId);

        if (!product) {
            throw new Error('Product tidak ditemukan');
        }

        if (product.stock < quantity) {
            throw new Error('Stock tidak cukup');
        }

        let totalPrice = product.price * quantity;

        if (product.specialOffer) {
            totalPrice = totalPrice * 0.9; // Diskon 10%
        }

        return {
            productId: product.id,
            productName: product.name,
            quantity,
            unitPrice: product.price,
            totalPrice,
            discount: product.specialOffer ? '10%' : 'Tidak ada'
        };
    }

}