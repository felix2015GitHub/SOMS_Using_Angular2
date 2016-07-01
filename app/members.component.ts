import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Hero } from './hero';
import { MembersService } from './members.service';

@Component({
  selector: 'my-members',
  templateUrl: 'app/members.component.html'
})

export class MembersComponent implements OnInit {
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
