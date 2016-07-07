import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from './orders';
import { OrdersService } from './orders.service';

@Component({
  selector: 'my-orders',
  templateUrl: 'app/orders.component.html'
})

export class OrdersComponent implements OnInit {

	orders: Order[] = [];

    constructor(
        private router: Router,
        private ordersService: OrdersService) { 
    }

    ngOnInit() {
        this.ordersService.getOrders()
            .then(orders => this.orders = orders);
    }

    addOrder() {
        this.router.navigate(['/addOrder']);
    }
}
