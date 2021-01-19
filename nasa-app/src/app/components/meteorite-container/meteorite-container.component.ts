import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// models
import { IMeteorite } from '../../models/meteorite.model';
import { NasaError } from 'src/app/models/nasaErrors.model';
import { ViewportScroller } from '@angular/common';

//* Filtering & Sorting
import { FilterService } from '../../services/filter.service';
import { IFilterObject } from '../../models/filter-object';
import { ISortingObject } from '../../models/sorting-object';
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

  //* Filtering & Sorting Props
  private _filterObject:IFilterObject;
  private _filtered:object[]|IMeteorite[];
  private _sortObjectDefault:ISortingObject;
  private _sortObjectMassDesc:ISortingObject;
  private _sortedDefault:object[]|IMeteorite[];
  private _sortedMassDesc:object[]|IMeteorite[];

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

      this._sortObjectDefault = {
        isStringSort: true,
        isAscending: true,
        property: 'name',
        unsortedArr: this.visibleMeteorites
      }

      this._sortObjectMassDesc = {
        isStringSort: false,
        isAscending: false,
        property: 'mass',
        unsortedArr: this.visibleMeteorites
      }

      this._sortedDefault = this.sortService.sortObjects(this._sortObjectDefault);
      this._sortedMassDesc = this.sortService.sortObjects(this._sortObjectMassDesc);

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

  sortMeteorites(sort:string):void {
    this.sort = sort;
    if (this.sort === 'massDesc') {
      // this.visibleMeteorites = this.visibleMeteorites.sort((a,b) => +b.mass - +a.mass)
      this.visibleMeteorites = this._sortedMassDesc as IMeteorite[];
    } else {
      // this.visibleMeteorites = this.visibleMeteorites.sort((a,b) => {
      //   return (a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
      // });
      this.visibleMeteorites = this._sortedDefault as IMeteorite[];
    }
  }

  onClickScroll(elementId:string):void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
