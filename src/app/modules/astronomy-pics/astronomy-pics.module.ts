import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { AstronomyPicsRoutingModule } from './astronomy-pics-routing.module';

import { AstroPicsService } from './services/astro-pics.service';

import { AstronomyPicsListComponent } from './components/astronomy-pics-list/astronomy-pics-list.component';
import { AstronomyPicsPage } from './pages/astronomy-pics.page';
import { AstronomyPicsThumbnailComponent } from './components/astronomy-pics-thumbnail/astronomy-pics-thumbnail.component';

import { AstronomyPicDetailPage } from './pages/astronomy-pic-detail.page';
import { AstronomyPicDetailComponent } from './components/astronomy-pic-detail/astronomy-pic-detail.component';


@NgModule({
  declarations: [
    AstronomyPicsPage,
    AstronomyPicsListComponent,
    AstronomyPicsThumbnailComponent,
    AstronomyPicDetailPage,
    AstronomyPicDetailComponent
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
