import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from './products.service';

@Component({
  selector: 'my-products',
  templateUrl: 'app/products.component.html'
})

export class ProductsComponent implements OnInit {
  /*
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  */
}