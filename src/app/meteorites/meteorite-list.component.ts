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
  filterBy:string = 'default';
  meteoriteDate:Date;
  meteoriteYear:number;

  constructor(private meteoriteService: MeteoriteService) {  }

  ngOnInit() {
    // this.meteorites = this.meteoriteService.getMeteorites()
    // api request returns Observable, must subscribe
    this.meteoriteService.getMeteorites().subscribe(meteorites => {
      this.meteorites = meteorites.filter(e => this.initFilter(e))
      this.visibleMeteorites = this.meteorites.slice(0)
    });
  }

  ngOnChanges() {
    // filter func if this then that
    // sort func -> default no sort, one option button for sort
    if (this.filterBy === 'new') {
      this.visibleMeteorites = this.visibleMeteorites.filter(e => this.filterNew(e))
    }
  }

  initFilter(e) {
    // return +e.mass > 25000 && this.filterFunction(e);
    return +e.mass > 25000;
  }

  filterNew(e) {
    // get full date from meteorite
    this.meteoriteDate = new Date(e.year);
    // get full year from meteorite date
    this.meteoriteYear = this.meteoriteDate.getFullYear();
    return this.meteoriteYear >= 1950;
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
