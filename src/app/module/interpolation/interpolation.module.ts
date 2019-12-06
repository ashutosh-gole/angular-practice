import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';

import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  {
    path: '',
    component: InterpolationComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    InterpolationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class InterpolationModule { }
