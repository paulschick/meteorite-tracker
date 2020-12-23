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
  MeteoriteDetailComponent,
  MeteoriteDisplayComponent
} from './meteorites/index';

// meteorites/shared imports
import {
  MeteoriteService
} from './meteorites/shared/index';

// APD Imports
import {
  ApdComponent
} from './APD/index';

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
    NgbModule,
    HttpClientModule
  ],
  providers: [MeteoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
