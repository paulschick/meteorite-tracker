import { Directive, HostListener } from '@angular/core';
import { NASA_API_KEY } from 'src/app/configs/nasa-config';
import { RandImgService } from './rand-img.service';

@Directive({
  selector: '[appRandomImg]'
})
export class RandomImgDirective {

  key:string = NASA_API_KEY;
  url:string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&count=1`;

  constructor(private service: RandImgService) { }

  @HostListener('click', ['$event.target']) onClick() {
    const e:string = 'clicked';
    this.service.receiveClick(e, this.url);
  }


}
