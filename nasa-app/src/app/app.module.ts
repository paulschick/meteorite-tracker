import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatMassPipe } from './pipes/format-mass.pipe';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AstronomyPicDetailComponent } from './components/astronomy-pic-detail/astronomy-pic-detail.component';
import { AstronomyPicsListComponent } from './components/astronomy-pics-list/astronomy-pics-list.component';
import { AstronomyPicsThumbnailComponent } from './components/astronomy-pics-thumbnail/astronomy-pics-thumbnail.component';
import { AstronomyPicsPageComponent } from './components/astronomy-pics-page/astronomy-pics-page.component';
import { AstronomyPicDetailPageComponent } from './components/astronomy-pic-detail-page/astronomy-pic-detail-page.component';
import { ApdComponent } from './components/apd/apd.component';
import { MeteoriteDisplayComponent } from './components/meteorite-display/meteorite-display.component';
import { MeteoriteDetailComponent } from './components/meteorite-detail/meteorite-detail.component';
import { MeteoriteListComponent } from './components/meteorite-list/meteorite-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RandomImageComponent } from './components/random-image/random-image.component';
import { RandomImagePageComponent } from './components/random-image-page/random-image-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatMassPipe,
    SidenavComponent,
    ToolbarComponent,
    AstronomyPicDetailComponent,
    AstronomyPicsListComponent,
    AstronomyPicsThumbnailComponent,
    AstronomyPicsPageComponent,
    AstronomyPicDetailPageComponent,
    ApdComponent,
    MeteoriteDisplayComponent,
    MeteoriteDetailComponent,
    MeteoriteListComponent,
    HomePageComponent,
    RandomImageComponent,
    RandomImagePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
