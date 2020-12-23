import { Injectable, ErrorHandler } from '@angular/core';
import { NasaError } from '../models/nasaErrors';

@Injectable()
export class NasaErrorHandlerService implements ErrorHandler {

  handleError(error: any): void {
    let customError: NasaError = new NasaError();
    customError.errorNumber = 200;
    customError.message = (<Error>error).message;
    customError.additionalMessage = 'An error occurred. Please try again.';

    console.log(customError);
  }

  constructor() {  }
}
