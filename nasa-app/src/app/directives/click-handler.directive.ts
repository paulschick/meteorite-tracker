import { Directive, HostListener } from '@angular/core';
import { ClickHandlerService } from '../services/click-handler.service';

@Directive({
  selector: '[appClickHandler]'
})
export class ClickHandlerDirective {
  clickNumber:number;

  constructor(private clickHandlerService: ClickHandlerService) {}

  @HostListener('click', ['$event.target']) onClick() {
    if (this.clickNumber === undefined || +this.clickNumber === NaN) {
      this.clickNumber = 0;
      this.clickHandlerService.getClick(this.clickNumber);
    }
    else {
      this.clickNumber++;
      this.clickHandlerService.getClick(this.clickNumber);
    }
  }
}
