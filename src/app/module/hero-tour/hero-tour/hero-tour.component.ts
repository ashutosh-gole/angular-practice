import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-tour',
  templateUrl: './hero-tour.component.html',
  styleUrls: ['./hero-tour.component.scss']
})
export class HeroTourComponent implements OnInit {

  heroes: HeroModel[];
  selectedHero: HeroModel;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: HeroModel): void {
    this.selectedHero = hero;
  }

}
