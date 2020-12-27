import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { AstronomyPicsRoutingModule } from './astronomy-pics-routing.module';

import { AstronomyPicsPage } from './pages/astronomy-pics.page';


@NgModule({
  declarations: [
    AstronomyPicsPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    AstronomyPicsRoutingModule
  ]
})
export class AstronomyPicsModule { }
