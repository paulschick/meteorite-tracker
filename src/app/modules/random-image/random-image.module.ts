import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { RandomImageRoutingModule } from './random-image-routing.module';
import { RandomImagePageComponent } from './pages/random-image-page/random-image-page.component';


@NgModule({
  declarations: [RandomImagePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RandomImageRoutingModule
  ]
})
export class RandomImageModule { }
