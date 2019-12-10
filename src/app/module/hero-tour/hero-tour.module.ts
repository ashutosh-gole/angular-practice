import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';

import { HeroTourComponent } from './hero-tour/hero-tour.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroHomeComponent } from './hero-home/hero-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hero-home',
    pathMatch: 'full'
  },
  {
    path: 'hero-home',
    component: HeroHomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroTourComponent
  },
  {
    path: 'hero-detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '**',
    redirectTo: 'hero-home'
  }
];

@NgModule({
  declarations: [
    HeroTourComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroHomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HeroTourModule { }
