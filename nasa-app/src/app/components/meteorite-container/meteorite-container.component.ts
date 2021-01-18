import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// models
import { IMeteorite } from '../../models/meteorite.model';
import { NasaError } from 'src/app/models/nasaErrors.model';
import { ViewportScroller } from '@angular/common';
import { getYear } from '../../utils/convert-to-year';


import { FilterService, IFilterObjectsByNum } from '../../services/filter.service';

@Component({
  selector: 'app-meteorite-container',
  templateUrl: './meteorite-container.component.html',
  styleUrls: ['./meteorite-container.component.scss']
})
export class MeteoriteContainerComponent implements OnInit {

  filterBy:string = 'default';
  sort:string = 'default';
  show:boolean = false;
  toggleButton:string = 'Show';
  private meteorites:IMeteorite[];
  visibleMeteorites:IMeteorite[];
  private meteoriteDate:Date;
  private meteoriteYear:number;

  constructor(private route: ActivatedRoute,
              private viewportScroller: ViewportScroller,
              private filter: FilterService) {}

  ngOnInit(): void {
    let resolvedMeteorites:IMeteorite[]|NasaError = this.route.snapshot.data['resolvedMeteorites'];

    if (resolvedMeteorites instanceof NasaError) {
      console.log(`Meteorite Container component error: ${resolvedMeteorites.additionalMessage}, ${resolvedMeteorites.message}`);
    } else {
      this.meteorites = resolvedMeteorites.filter(e => +e.mass > 25000);
      this.visibleMeteorites = this.meteorites.slice(0);


      /*
      TODO: implement the below code to replace the filter function
      * filtering functional, now dynamically choose filtering methods
      const filterObjects:IFilterObjectsByNum = {
        objects: this.meteorites,
        property: 'mass',
        isGreater: true,
        comparison: 50000
      };

      const checkFilter = this.filter.filterObjects(filterObjects);

      console.log(checkFilter);
      */


    }
  }

  toggle():void {
    this.show = !this.show;
    if (this.show) this.toggleButton = 'Hide';
    else this.toggleButton = 'Show';
  }

  filterToggled(filterBy:string):void {
    this.filterBy = filterBy;
    if (this.filterBy === 'new') {
      this.visibleMeteorites = this.visibleMeteorites.filter(e => getYear(e['year']) >= 1950)
    }
    else {
      this.visibleMeteorites = this.meteorites;
    }
  }

  sortMeteorites(sort:string):void {
    this.sort = sort;
    if (this.sort === 'massDesc') {
      this.visibleMeteorites = this.visibleMeteorites.sort((a,b) => +b.mass - +a.mass)
    } else {
      this.visibleMeteorites = this.visibleMeteorites.sort((a,b) => {
        return (a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
      });
    }
  }

  onClickScroll(elementId:string):void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
