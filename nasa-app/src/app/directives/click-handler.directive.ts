import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickHandler]'
})
export class ClickHandlerDirective {

  @HostListener('click', ['$event.target']) onClick() {
    console.log('button was clicked')
  }
}
