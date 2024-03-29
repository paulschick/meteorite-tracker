import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstronomyPicDetailPageComponent } from './components/astronomy-pic-detail-page/astronomy-pic-detail-page.component';
import { MeteoriteResolverService } from './services/meteorite-resolver.service';
import { MeteoriteContainerComponent } from './components/meteorite-container/meteorite-container.component';
import { DailyImagesContainerComponent } from './components/daily-images-container/daily-images-container.component';
import { RandomImgContainer } from './components/random-img-container/random-img-container.component';

const routes: Routes = [
  { path: 'random-image', component: RandomImgContainer },
  { path: 'random-image/image/:date', component: AstronomyPicDetailPageComponent },
  { path: 'astronomy-pics', component: DailyImagesContainerComponent },
  { path: 'astronomy-pics/image/:date', component: AstronomyPicDetailPageComponent },
  { path: '', component: MeteoriteContainerComponent, resolve: {
    resolvedMeteorites: MeteoriteResolverService
  }, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
