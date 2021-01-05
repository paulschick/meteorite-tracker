import { Directive, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickHandlerService } from '../services/click-handler.service';
import { RandomImageService } from '../services/random-image.service';
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
              private randomImageService: RandomImageService) {}

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
    this.sub = this.randomImageService.getRandomImages(5).subscribe(
      // (data:IApd[]) => this.randomImageArray = data,
      (data:IApd[]) => this.clickHandlerService.receiveResponseObject(data),
      (err:NasaError) => console.log(`Click-Handler HTTP error: ${err}`),
      () => console.log('Click-handler request completed',this.randomImageArray)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
