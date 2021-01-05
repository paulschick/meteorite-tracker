import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstronomyPicDetailPageComponent } from './components/astronomy-pic-detail-page/astronomy-pic-detail-page.component';
import { AstronomyPicsPageComponent } from './components/astronomy-pics-page/astronomy-pics-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RandomImagePageComponent } from './components/random-image-page/random-image-page.component';
import { ApdResolverService } from './services/apd-resolver.service';
import { AstronomyPicsResolverService } from './services/astronomy-pics-resolver.service';
import { MeteoriteResolverService } from './services/meteorite-resolver.service';

const routes: Routes = [
  { path: 'astronomy-pics/image/:date', component: AstronomyPicDetailPageComponent },
  { path: 'astronomy-pics', component: AstronomyPicsPageComponent, resolve: { resolvedAstronomyPics: AstronomyPicsResolverService } },
  { path: 'random-image', component: RandomImagePageComponent },
  { path: '', component: HomePageComponent, resolve: {
    resolvedMeteorites: MeteoriteResolverService,
    resolvedApd: ApdResolverService
  }, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
