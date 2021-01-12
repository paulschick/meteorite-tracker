import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-filter-btn',
  templateUrl: './toggle-filter-btn.component.html',
  styleUrls: ['./toggle-filter-btn.component.scss']
})
export class ToggleFilterBtnComponent {

  @Input() filterBy:string;
  @Input() sort:string;
  @Output() filterClick = new EventEmitter<any>();
  @Output() sortMeteoritesClick = new EventEmitter<any>();

  filterMeteorites():void {
    this.filterBy = this.filterBy === 'default' ? 'new' : 'default';
    this.filterClick.emit(this.filterBy);
  }

  sortMeteoritesMassDesc() {
    this.sort = this.sort === 'default' ? 'massDesc' : 'default';
    this.sortMeteoritesClick.emit(this.sort);
  }

}
