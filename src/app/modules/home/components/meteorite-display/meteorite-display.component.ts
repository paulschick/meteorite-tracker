import { Component } from '@angular/core';

@Component({
  selector: 'mt-display',
  templateUrl: './meteorite-display.component.html',
  styleUrls: ['./meteorite-display.component.scss']
})
export class MeteoriteDisplayComponent {
  filterBy:string = 'default';
}
