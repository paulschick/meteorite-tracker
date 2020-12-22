import { Component, OnChanges, OnInit } from '@angular/core';
import { MeteoriteService } from './shared/index';

@Component({
  selector: 'mt-list',
  templateUrl: './meteorite-list.component.html',
  styleUrls: ['./meteorite-list.component.css']
})
export class MeteoriteListComponent implements OnInit, OnChanges {
  meteorites:any[];
  visibleMeteorites:any[];
  filterBy:string = 'mass';
  constructor(private meteoriteService: MeteoriteService) {  }

  ngOnInit() {
    // this.meteorites = this.meteoriteService.getMeteorites()
    // api request returns Observable, must subscribe
    this.meteoriteService.getMeteorites().subscribe(meteorites => {
      this.meteorites = meteorites.filter(e => this.initFilter(e))
    });
  }

  ngOnChanges() {
    // filter func if this then that
    // sort func -> default no sort, one option button for sort
    if (this.filterBy !== 'default') {

    }
  }

  initFilter(e) {
    return +e.mass > 25000 && this.filterFunction(e);
  }

  filterFunction(e) {
    if (this.filterBy === 'default') {
      return e
    } else {
      return +e.mass > 100000
    }
  }

  sortFunction(meteoriteArray) {
    console.log(meteoriteArray);
  }
}
