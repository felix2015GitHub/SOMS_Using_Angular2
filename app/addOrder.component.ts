import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from './orders';
import { ORDERS } from './mock-orders';

@Component({
  selector: 'my-addOrder',
  templateUrl: 'app/addOrder.component.html'
})

export class AddOrderComponent {

	constructor(
		private router: Router) { 
	}

	active = true;

	onSubmit() {		
		this.router.navigate(['/orders']);
	}
}
