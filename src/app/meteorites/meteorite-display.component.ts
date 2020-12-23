import { Component } from '@angular/core';

@Component({
  selector: 'mt-display',
  template: `
    <apd></apd>
    <h2 id="list-title" class="text-center">Meteorite List</h2>
    <div class = "container">
      <div class="sorting-wrapper">
        <h5 class="sorting-btn-wrapper">Filter Meteorites</h5>
        <div class="sorting-btn-wrapper">
          <button class="btn btn-primary btn-sm sorting-btn" (click)="filterBy='new'">After 1950</button>
          <button class="btn btn-primary btn-sm sorting-btn" (click)="filterBy='default'">Default</button>
        </div>
      </div>
    </div>
    <mt-list [filterBy]="filterBy"></mt-list>
  `,
  styleUrls: ['./meteorite-display.component.css']
})
export class MeteoriteDisplayComponent {
  filterBy:string = 'default';
}
