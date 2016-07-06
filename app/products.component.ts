import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './products';
import { ProductsService } from './products.service';

@Component({
    selector: 'my-products',
    templateUrl: 'app/products.component.html'
})

export class ProductsComponent implements OnInit {

    products: Product[] = [];

  	constructor(
      	private router: Router,
      	private productsService: ProductsService) { 
  	}

    ngOnInit() {
        this.productsService.getProducts()
            .then(products => this.products = products);
    }

  	addProduct() {
        this.router.navigate(['/addProduct']);
    }
}
