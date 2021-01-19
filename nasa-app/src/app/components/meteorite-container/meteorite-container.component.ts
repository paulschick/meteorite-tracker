import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMeteorite } from '../../models/meteorite.model';
import { NasaError } from 'src/app/models/nasaErrors.model';
import { ViewportScroller } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { IFilterObject } from '../../models/filter-object';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-meteorite-container',
  templateUrl: './meteorite-container.component.html',
  styleUrls: ['./meteorite-container.component.scss'],
})
export class MeteoriteContainerComponent implements OnInit {
  filterBy: string = 'default';
  sort: string = 'default';
  show: boolean = false;
  toggleButton: string = 'Show';
  visibleMeteorites: IMeteorite[];
  private meteorites: IMeteorite[];
  private _filterObject: IFilterObject;
  private _filtered: object[] | IMeteorite[];
  private _sorted: object[] | IMeteorite[];

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private filter: FilterService,
    private sortService: SortService
  ) {}

  ngOnInit(): void {
    let resolvedMeteorites: IMeteorite[] | NasaError = this.route.snapshot.data[
      'resolvedMeteorites'
    ];

    if (resolvedMeteorites instanceof NasaError) {
      console.log(
        `Meteorite Container component error: ${resolvedMeteorites.additionalMessage}, ${resolvedMeteorites.message}`
      );
    } else {
      //* Only populating meteorites of mass over 2500, remove elements with undefined
      this.meteorites = resolvedMeteorites.filter((e) => +e.mass > 2500);
      this.visibleMeteorites = this.meteorites.slice(0);

      this._filterObject = {
        objects: this.visibleMeteorites,
        property: 'year',
        isGreater: true,
        comparison: 1950,
      };

      this._filtered = this.filter.filterObjects(this._filterObject);
    }
  }
  toggle(): void {
    this.show = !this.show;
    if (this.show) this.toggleButton = 'Hide';
    else this.toggleButton = 'Show';
  }
  filterToggled(filterBy: string): void {
    this.filterBy = filterBy;
    if (this.filterBy === 'new') {
      this.visibleMeteorites = this._filtered as IMeteorite[];
    } else {
      this.visibleMeteorites = this.meteorites;
    }
  }
  sortMeteorites(sort: string): void {
    this.sort = sort;
    if (this.sort === 'massDesc') {
      this._sorted = this.sortService.sortPropDesc(
        this.visibleMeteorites,
        'mass'
      );
      this.visibleMeteorites = this._sorted as IMeteorite[];
    } else {
      this._sorted = this.sortService.sortStringPropsDesc(
        this.visibleMeteorites,
        'name'
      );
      this.visibleMeteorites = this._sorted as IMeteorite[];
    }
  }
  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
