import { Component } from '@angular/core';

@Component({
  selector: 'app-meteorite-display',
  templateUrl: './meteorite-display.component.html',
  styleUrls: ['./meteorite-display.component.scss']
})
export class MeteoriteDisplayComponent {
  filterBy:string = 'default';
  show:boolean = false;
  buttonName:any = 'Show';

  toggle() {
    this.show = !this.show;
    if (this.show) this.buttonName = 'Hide';
    else this.buttonName = 'Show';
  }
}
