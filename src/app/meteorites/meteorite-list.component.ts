import { Component, OnChanges, OnInit } from '@angular/core';
import { MeteoriteService } from './shared/index';

@Component({
  selector: 'mt-list',
  templateUrl: './meteorite-list.component.html',
  styleUrls: ['./meteorite-list.component.css']
})
export class MeteoriteListComponent implements OnInit, OnChanges {
  meteorites:any[]
  visibleMeteorites:any[]
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
  }

  initFilter(e) {
    return +e.mass > 75000;
  }

  filterFunction(meteoriteArray) {
    console.log(meteoriteArray);
  }

  sortFunction(meteoriteArray) {
    console.log(meteoriteArray);
  }
}
