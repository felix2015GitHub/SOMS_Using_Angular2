import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrdersService } from './orders.service';

@Component({
  selector: 'my-orders',
  templateUrl: 'app/orders.component.html'
})

export class OrdersComponent implements OnInit {

    constructor(
        private router: Router ) { 
    }

    addOrder() {
        this.router.navigate(['/addOrder']);
    }
}
