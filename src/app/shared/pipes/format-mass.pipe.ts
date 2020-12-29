import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatMass' })
export class FormatMassPipe implements PipeTransform {
  transform(value: any): any {
    // check for 0 or not a value
    if (value === 0) {
      return 0;
    }
    if (!value || isNaN(+value) === true) {
      return 'No Mass';
    }
    if ((+value/(1000)) < 0.01) {
      return value.toFixed(4) + 'g';
    } else {
      return (+value/(1000)).toFixed(2) + 'Kg';
    }
  }
}
