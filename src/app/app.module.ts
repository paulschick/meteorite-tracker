import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';



// ng-bootstrap
// Http

// meteorite imports
import {
  // MeteoriteListComponent,
  MeteoriteDetailComponent,
  MeteoriteDisplayComponent
} from './meteorites/index';
import {
  MeteoriteListComponent
} from './meteorites2/meteorite-list.component';

// meteorites/shared imports
import {
  MeteoriteService
} from './meteorites/shared/index';

// APD Imports
import {
  ApdComponent,
  ApdService
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
    AppRoutingModule,
    NgbModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [MeteoriteService, ApdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
