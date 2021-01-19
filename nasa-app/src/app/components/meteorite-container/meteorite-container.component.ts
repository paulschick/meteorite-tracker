import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// models
import { IMeteorite } from '../../models/meteorite.model';
import { NasaError } from 'src/app/models/nasaErrors.model';
import { ViewportScroller } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { IFilterObject } from '../../models/filter-object';

/*
/////TODO Integration Testing
/////! I need to do integration testing with this and the sorting function
/////^ The filtering/sorting logic within the component is wonky to me, and caused problems in a later commit with integrated sort service
* SortService Implementation Successful
*/
import { SortService } from '../../services/sort.service';


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

  private _filterObject:IFilterObject;
  private _filtered:object[]|IMeteorite[];

  private _sorted:object[]|IMeteorite[];

  constructor(private route: ActivatedRoute,
              private viewportScroller: ViewportScroller,
              private filter: FilterService,
              private sortService: SortService) {}

  ngOnInit(): void {

    let resolvedMeteorites:IMeteorite[]|NasaError = this.route.snapshot.data['resolvedMeteorites'];

    if (resolvedMeteorites instanceof NasaError) {
      console.log(`Meteorite Container component error: ${resolvedMeteorites.additionalMessage}, ${resolvedMeteorites.message}`);
    } else {
      this.meteorites = resolvedMeteorites.filter(e => +e.mass > 2500);
      this.visibleMeteorites = this.meteorites.slice(0);

      this._filterObject = {
        objects: this.visibleMeteorites,
        property: 'year',
        isGreater: true,
        comparison: 1950
      }

      this._filtered = this.filter.filterObjects(this._filterObject);
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
      this.visibleMeteorites = this._filtered as IMeteorite[];
    }
    else {
      this.visibleMeteorites = this.meteorites;
    }
  }

  /////todo Replace with sort.service.ts (tested).
  /////& Sorting here should be in relation to the filtered arrays -> so unsort, filtered, re-sorted
  /*

  /////! Original Sorting Function here -> replace with SortService, as IMeteorite[], need interface!

  ! Remove depracated sorting code
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
  */
  sortMeteorites(sort:string):void {
    this.sort = sort;
    if (this.sort === 'massDesc') {
      // this.visibleMeteorites = this.visibleMeteorites.sort((a,b) => +b.mass - +a.mass)

      //& Sorting Functionality Attempt 001 - massDesc

      this._sorted = this.sortService.sortPropDesc(this.visibleMeteorites, 'mass');
      this.visibleMeteorites = this._sorted as IMeteorite[];
    } else {
      // this.visibleMeteorites = this.visibleMeteorites.sort((a,b) => {
      //   return (a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
      // });

      //& Sorting name descending Attempt 001

      this._sorted = this.sortService.sortStringPropsDesc(this.visibleMeteorites, 'name');
      this.visibleMeteorites = this._sorted as IMeteorite[];
    }
  }

  onClickScroll(elementId:string):void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
