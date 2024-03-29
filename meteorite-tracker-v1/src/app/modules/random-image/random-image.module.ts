import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { RandomImageRoutingModule } from './random-image-routing.module';
import { RandomImagePageComponent } from './pages/random-image-page/random-image-page.component';
import { RandomImageComponent } from './components/random-image/random-image.component';


@NgModule({
  declarations: [RandomImagePageComponent, RandomImageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RandomImageRoutingModule
  ]
})
export class RandomImageModule { }
