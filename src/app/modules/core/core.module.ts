import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeService } from '../home/home.service';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { NasaErrorHandlerService } from './services/nasa-error-handler.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    HomeService,
    { provide: ErrorHandler, useClass: NasaErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
