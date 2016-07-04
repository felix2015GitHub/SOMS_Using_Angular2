import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from './products.service';

@Component({
  selector: 'my-products',
  templateUrl: 'app/products.component.html'
})

export class ProductsComponent {

  	constructor(
      	private router: Router ) { 
  	}

  	addProduct() {
        this.router.navigate(['/addProduct']);
    }
}
