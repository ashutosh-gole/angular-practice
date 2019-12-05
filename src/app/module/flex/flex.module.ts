import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RespFlexComponent } from './resp-flex/resp-flex.component';
import { SharedModule } from 'src/app/core/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RespFlexComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    RespFlexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class FlexModule { }
