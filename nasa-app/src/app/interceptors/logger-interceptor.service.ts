import { Injectable } from '@angular/core';
import {  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor}
from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class LoggerInterceptorService {

  constructor(private logger: NGXLogger) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    this.logger.debug(request);
    this.logger.info(request);

    return next.handle(request);
  }
}
