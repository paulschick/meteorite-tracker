import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeModule } from '../home/home.module';

import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { NasaErrorHandlerService } from './services/nasa-error-handler.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [],
  providers: [
    { provide: ErrorHandler, useClass: NasaErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
