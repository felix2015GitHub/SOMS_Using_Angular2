import { Order } from './orders';
import { ORDERS } from './mock-orders';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {
    getOrders() {
        return Promise.resolve(ORDERS);
    }
}