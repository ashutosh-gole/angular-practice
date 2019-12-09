import { Component, OnInit, Input } from '@angular/core';
import { HEROES } from '../../../core/shared/constants/mock-heroes';
import { HeroModel } from 'src/app/core/models/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input()hero: HeroModel;
  
  constructor() { }

  ngOnInit() {
  }

}
