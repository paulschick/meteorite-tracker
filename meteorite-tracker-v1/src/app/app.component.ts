import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'mt-root',
  template: `
    <mt-sidenav></mt-sidenav>
  `
})
export class AppComponent implements AfterViewInit {

  constructor( private elementRef: ElementRef ) {}

  ngAfterViewInit() {
    // set dark mode for whole document
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#121212';
  }
}
