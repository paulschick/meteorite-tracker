import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Http
import { HttpClientModule } from '@angular/common/http';

// meteorite imports
import {
  MeteoriteListComponent,
  MeteoriteDetailComponent
} from './meteorites/index';

// meteorites/shared imports
import {
  MeteoriteService
} from './meteorites/shared/index';

@NgModule({
  declarations: [
    AppComponent,
    MeteoriteListComponent,
    MeteoriteDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [MeteoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
