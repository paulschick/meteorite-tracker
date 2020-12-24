import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { MeteoriteDetailComponent } from './components/meteorite-detail/meteorite-detail.component';
import { MeteoriteListComponent } from './components/meteorite-list/meteorite-list.component';
import { ApdComponent } from './components/apd/apd.component';
import { MeteoriteDisplayComponent } from './components/meteorite-display/meteorite-display.component';
import { HomePage } from './pages/home/home.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MeteoriteDetailComponent,
    MeteoriteListComponent,
    ApdComponent,
    MeteoriteDisplayComponent,
    HomePage
  ]
})
export class HomeModule {

}
