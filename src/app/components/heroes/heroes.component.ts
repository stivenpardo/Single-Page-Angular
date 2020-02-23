import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../../services/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heros: Hero[] = [];
  constructor(private _heroService: HeroService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    this.heros = this._heroService.getHeros();
    // console.log(this.heros);
  }

  seeHero(idx: number) {
    this.router.navigate( ['/Hero', idx] )
  }

}
