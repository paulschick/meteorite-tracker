import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MeteoriteListComponent } from './meteorites/meteorite-list.component';
import { MeteoriteDetailComponent } from './meteorites/meteorite-detail.component';
import { MeteoriteDisplayComponent } from './meteorites/meteorite-display.component';
import { ApdComponent } from './apd/apd.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoriteListComponent,
    MeteoriteDetailComponent,
    MeteoriteDisplayComponent,
    ApdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
