import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomImagePageComponent } from './pages/random-image-page/random-image-page.component';

const routes: Routes = [
  { path: '', component: RandomImagePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomImageRoutingModule { }
