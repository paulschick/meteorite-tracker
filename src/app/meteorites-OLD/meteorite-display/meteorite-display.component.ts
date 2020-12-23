import { Component } from '@angular/core';

@Component({
  selector: 'mt-display',
  templateUrl: './meteorite-display.component.html',
  styleUrls: ['./meteorite-display.component.css']
})
export class MeteoriteDisplayComponent {
  filterBy:string = 'default';
}
