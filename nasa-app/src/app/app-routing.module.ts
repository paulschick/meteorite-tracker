import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstronomyPicDetailPageComponent } from './components/astronomy-pic-detail-page/astronomy-pic-detail-page.component';
import { RandomImagePageComponent } from './components/random-image-page/random-image-page.component';
import { AstronomyPicsResolverService } from './services/astronomy-pics-resolver.service';
import { MeteoriteResolverService } from './services/meteorite-resolver.service';
import { MeteoriteContainerComponent } from './components/meteorite-container/meteorite-container.component';
import { DailyImagesContainerComponent } from './components/daily-images-container/daily-images-container.component';

const routes: Routes = [
  { path: 'astronomy-pics/image/:date', component: AstronomyPicDetailPageComponent },
  { path: 'astronomy-pics', component: DailyImagesContainerComponent, resolve: { resolvedAstronomyPics: AstronomyPicsResolverService } },
  { path: 'random-image', component: RandomImagePageComponent },
  // development route
  { path: 'new-home', component: MeteoriteContainerComponent, resolve: { resolvedMeteorites: MeteoriteResolverService } },
  { path: '', component: MeteoriteContainerComponent, resolve: {
    resolvedMeteorites: MeteoriteResolverService
  }, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
