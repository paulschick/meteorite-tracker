import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-filter-btn',
  templateUrl: './toggle-filter-btn.component.html',
  styleUrls: ['./toggle-filter-btn.component.scss']
})
export class ToggleFilterBtnComponent implements OnInit {

  @Input() filterBy:string;
  @Output() filterClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
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
