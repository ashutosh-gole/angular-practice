import { Injectable } from '@angular/core';
import { HEROES } from '../shared/constants/mock-heroes';
import { HeroModel } from 'src/app/core/models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): HeroModel[] {
    return HEROES;
  }

}
