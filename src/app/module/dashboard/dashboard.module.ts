import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    children: [
      {
        path: 'resp-flex',
        loadChildren: () => import('../flex/flex.module').then(m => m.FlexModule)
      },
      {
        path: 'pipe',
        loadChildren: () => import('../pipe/pipe.module').then(m => m.PipeModule)
      },
      {
        path: 'interpolation',
        loadChildren: () => import('../interpolation/interpolation.module').then(m => m.InterpolationModule)
      },
      {
        path: 'property-binding',
        loadChildren: () => import('../property-binding/property-binding.module').then(m => m.PropertyBindingModule)
      },
      {
        path: 'hero-tour',
        loadChildren: () => import('../hero-tour/hero-tour.module').then(m => m.HeroTourModule)
      },
      {
        path: '',
        redirectTo: 'resp-flex',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'resp-flex'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
