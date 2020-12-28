import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstronomyPicsPage } from './pages/astronomy-pics.page';
import { AstronomyPicDetailPage } from './pages/astronomy-pic-detail.page';

const routes: Routes = [
  { path: 'image/:date', component: AstronomyPicDetailPage },
  { path: '', component: AstronomyPicsPage},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronomyPicsRoutingModule { }