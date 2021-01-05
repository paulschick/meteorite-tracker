import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickHandler]'
})
export class ClickHandlerDirective {

  clickNumber:number;
  @HostListener('click', ['$event.target']) onClick() {
    console.log('button was clicked')
    if (this.clickNumber === undefined || +this.clickNumber === NaN) {
      this.clickNumber = 0;
    }
    else {
      this.clickNumber++;
    }
  }
}
