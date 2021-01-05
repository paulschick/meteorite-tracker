// import { Directive, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appClickHandler]'
// })
// export class ClickHandlerDirective {

//   @HostListener('click', ['$event.target']) onClick() {
//     console.log('button was clicked')
//   }
// }

// With increasing number on click:

// import { Directive, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appClickHandler]'
// })
// export class ClickHandlerDirective {

//   clickNumber:number;
//   @HostListener('click', ['$event.target']) onClick() {
//     console.log('button was clicked')
//     if (this.clickNumber === undefined || +this.clickNumber === NaN) {
//       this.clickNumber = 0;
//       console.log(this.clickNumber);
//     }
//     else {
//       this.clickNumber++
//       console.log(this.clickNumber);
//     }
//   }
// }
