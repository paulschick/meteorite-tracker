import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMeteorite } from '../../models/meteorite.model';

@Component({
  selector: 'app-meteorite-list',
  templateUrl: './meteorite-list.component.html'
})
export class MeteoriteListComponent implements OnInit {
  @Input() visibleMeteorites:IMeteorite[];
  @Input() filterBy:string;
  @Output() filterClick = new EventEmitter<any>();

  constructor() {  }

  ngOnInit() {
  }

  filterMeteorites() {
    if (this.filterBy === 'default') {
      this.filterBy = 'new';
      this.filterClick.emit(this.filterBy);
    } else {
      this.filterBy = 'default';
      this.filterClick.emit(this.filterBy);
    }
  }
}
