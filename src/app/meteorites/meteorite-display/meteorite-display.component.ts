import { Component } from '@angular/core';

@Component({
  templateUrl: './meteorite-display.component.html',
  styleUrls: ['./meteorite-display.component.css']
})
export class MeteoriteDisplayComponent {
  filterBy:string = 'default';
}
