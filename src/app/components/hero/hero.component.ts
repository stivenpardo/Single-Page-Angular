import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  hero: any = {};
  houseImg:any;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroService: HeroService
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.hero = this._heroService.getHero(params['id']);
    });

    console.log(this.getHouseImg())
  }

  getHouseImg(){
    this.hero.casa == "Marvel" 
    ? this.houseImg= "../../../assets/images/houseMarvel.jpg" 
    : this.houseImg= "../../../assets/images/houseDc.jpeg" 
    return this.houseImg
  }

 
  

}
