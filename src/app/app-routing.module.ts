import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeteoriteDisplayComponent } from './meteorites/meteorite-display/meteorite-display.component';
// import ResolverService

const routes: Routes = [
  { path: 'meteorites', component: MeteoriteDisplayComponent },
  { path: '', redirectTo: 'meteorites', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
