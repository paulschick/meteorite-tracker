import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { AstronomyPicsRoutingModule } from './astronomy-pics-routing.module';

import { AstroPicsService } from './services/astro-pics.service';

import { AstronomyPicsPage } from './pages/astronomy-pics.page';
import { AstronomyPicsListComponent } from './components/astronomy-pics-list/astronomy-pics-list.component';
import { AstronomyPicsThumbnailComponent } from './components/astronomy-pics-thumbnail/astronomy-pics-thumbnail.component';


@NgModule({
  declarations: [
    AstronomyPicsPage,
    AstronomyPicsListComponent,
    AstronomyPicsThumbnailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AstronomyPicsRoutingModule
  ],
  providers: [
    AstroPicsService
  ]
})
export class AstronomyPicsModule { }
