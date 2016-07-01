import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrdersService } from './orders.service';

@Component({
  selector: 'my-orders',
  templateUrl: 'app/orders.component.html'
})

export class OrdersComponent implements OnInit {
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
