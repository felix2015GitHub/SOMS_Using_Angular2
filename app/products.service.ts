import { Product } from './products';
import { PRODUCTS } from './mock-products';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
    getProducts() {
        return Promise.resolve(PRODUCTS);
    }
}