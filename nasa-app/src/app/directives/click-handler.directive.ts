import { Directive, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickHandlerService } from '../services/click-handler.service';
import { AstroPicsService } from '../services/astro-pics.service';
import { IApd } from '../models/apd.model';
import { NasaError } from '../models/nasaErrors.model';

@Directive({
  selector: '[appClickHandler]'
})
export class ClickHandlerDirective implements OnInit, OnDestroy {
  clickNumber:number;
  sub:Subscription;
  randomImageArray:IApd[];

  constructor(private clickHandlerService: ClickHandlerService,
              private astroPicsService: AstroPicsService) {}

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

  ngOnInit() {
    this.sub = this.astroPicsService.getRandomImages().subscribe(
      (data:IApd[]) => this.randomImageArray = data,
      (err:NasaError) => console.log(`Click-Handler HTTP error: ${err}`),
      () => console.log('click-handler request completed')
    );

    // this successfully gets the response from the service
    // now this needs to also be passed to the click-handler service
    console.log(this.randomImageArray);
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
