import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatMass' })
export class FormatMassPipe implements PipeTransform {
  transform(value: any): any {
    switch(true) {
      case +value === 0:
        return 0;
        break;
      case !value || isNaN(+value):
        return 'No Mass';
        break;
      case +value < 1000:
        return value.toFixed(2) + 'g'
      case +value < 1000000:
        return (+value/(1000)).toFixed(2) + 'Kg';
        break;
      case + value >= 1000000:
        return (+value/(1000000)).toFixed(2) + ' Metric Tons';
      default:
        return value;
    }
  }
}
