import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// meteorite imports
import {
  MeteoriteListComponent,
  MeteoriteDetailComponent
} from './meteorites/index';

@NgModule({
  declarations: [
    AppComponent,
    MeteoriteListComponent,
    MeteoriteDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
