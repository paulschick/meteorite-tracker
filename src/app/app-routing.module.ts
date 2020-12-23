import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApdResolverService } from './core/apd-resolver.service';
import { MeteoritesResolverService } from './core/meteorites-resolver.service';

import { MeteoriteDisplayComponent } from './meteorites/meteorite-display/meteorite-display.component';
// import ResolverService

const routes: Routes = [
  { path: 'meteorites', component: MeteoriteDisplayComponent, resolve: {
    resolvedMeteorites: MeteoritesResolverService,
    resolvedApd: ApdResolverService
  } },
  { path: '', redirectTo: 'meteorites', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
