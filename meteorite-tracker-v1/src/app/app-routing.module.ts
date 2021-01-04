import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApdResolverService } from './modules/home/apd-resolver.service';
import { MeteoritesResolverService } from './modules/home/meteorite-resolver.service';
import { HomePage } from './modules/home/pages/home/home.page';

const routes: Routes = [
  { path: 'astronomy-pics', loadChildren: () => import('./modules/astronomy-pics/astronomy-pics.module').then(m => m.AstronomyPicsModule) },
  { path: 'random-image', loadChildren: () => import('./modules/random-image/random-image.module').then(m => m.RandomImageModule) },
  { path: '', component: HomePage, resolve: {
    resolvedMeteorites: MeteoritesResolverService,
    resolvedApd: ApdResolverService
  }, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
