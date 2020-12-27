import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstronomyPicsPage } from './pages/astronomy-pics.page';
import { AstroPicsResolverService } from './services/astro-pics-resolver.service';

const routes: Routes = [
  // { path: '', component: AstronomyPicsPage, resolve: {
  //   resolvedAstroPics: AstroPicsResolverService
  // } },
  { path: '', component: AstronomyPicsPage},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronomyPicsRoutingModule { }
