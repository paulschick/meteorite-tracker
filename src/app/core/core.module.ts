import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './data.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NasaErrorHandlerService } from './nasa-error-handler.service';

// import { HTTP_INTERCEPTOR } from '@angular/common/http';
// import interceptors here

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DataService,
    { provide: ErrorHandler, useClass: NasaErrorHandlerService },
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
