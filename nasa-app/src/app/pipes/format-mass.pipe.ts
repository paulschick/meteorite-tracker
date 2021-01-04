import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMass'
})
export class FormatMassPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
