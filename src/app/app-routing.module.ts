import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeteoriteListComponent } from './meteorites/meteorite-list.component';
// import ResolverService

const routes: Routes = [
  { path: 'meteorites', component: MeteoriteListComponent },
  { path: '', redirectTo: 'meteorites', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
