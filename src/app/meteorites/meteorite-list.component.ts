import { Component, OnInit, OnChanges } from '@angular/core';
import { MeteoriteService } from './shared/index';

@Component({
  selector: 'mt-list',
  templateUrl: './meteorite-list.component.html',
  styleUrls: ['./meteorite-list.component.css']
})
export class MeteoriteListComponent implements OnInit, OnChanges {
  meteorites:any[];
  visibleMeteorites: any[] = [];
  filterBy: string = 'all';

  constructor(private meteoriteService: MeteoriteService) {  }

  ngOnInit() {
    // this.meteorites = this.meteoriteService.getMeteorites()
    // api request returns Observable, must subscribe
    this.meteoriteService.getMeteorites().subscribe(meteorites => {
      this.meteorites = meteorites;
    });
  }

  ngOnChanges() {
    if(this.meteorites) {
      this.filterMeteorites(this.filterBy);
    }
  }

  filterMeteorites(filter) {
    if (filter === 'all') {
      this.visibleMeteorites = this.meteorites.slice(0);
    } else {
      this.visibleMeteorites = this.meteorites.filter(meteorite => {
        return meteorite.name.toLocaleLowerCase() === filter;
      })
    }
  }
}
