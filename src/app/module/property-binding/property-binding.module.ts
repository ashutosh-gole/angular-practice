import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';

import { PropertyBindingComponent } from './property-binding/property-binding.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyBindingComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [PropertyBindingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PropertyBindingModule { }
