import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './products';
import { PRODUCTS } from './mock-products';
//import { AddMemberService } from './addMember.service';

@Component({
  selector: 'my-addProduct',
  templateUrl: 'app/addProduct.component.html'
})

export class AddProductComponent {
	constructor(
		private router: Router) { 
	}

	active = true;

	onSubmit() {		
		this.router.navigate(['/products']);
	}
}
