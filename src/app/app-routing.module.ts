import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApdResolverService } from './modules/home/apd-resolver.service';
import { MeteoritesResolverService } from './modules/home/meteorite-resolver.service';
import { HomePage } from './modules/home/pages/home/home.page';

const routes: Routes = [
  { path: '', component: HomePage, resolve: {
    resolvedMeteorites: MeteoritesResolverService,
    resolvedApd: ApdResolverService
  } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
