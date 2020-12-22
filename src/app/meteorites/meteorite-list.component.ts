import { Component, OnInit } from '@angular/core';
import { MeteoriteService } from './shared/index';

@Component({
  selector: 'mt-list',
  templateUrl: './meteorite-list.component.html',
  styleUrls: ['./meteorite-list.component.css']
})
export class MeteoriteListComponent implements OnInit {
  meteorites:any[]
  visibleMeteorites:any[]
  constructor(private meteoriteService: MeteoriteService) {  }

  ngOnInit() {
    // this.meteorites = this.meteoriteService.getMeteorites()
    // api request returns Observable, must subscribe
    this.meteoriteService.getMeteorites().subscribe(meteorites => {
      this.meteorites = meteorites.filter(meteorite => {
        return +meteorite.mass > 75000;
      });
    });
  }

  filterFunction(meteoriteArray) {
    console.log(meteoriteArray);
  }

  sortFunction(meteoriteArray) {
    console.log(meteoriteArray);
  }
}
