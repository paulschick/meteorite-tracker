import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// models
import { IMeteorite } from '../../models/meteorite.model';
import { NasaError } from 'src/app/models/nasaErrors.model';
import { ViewportScroller } from '@angular/common';

// TODO: *******
import { FilterService } from '../../services/filter.service';
//! this will be moved
import { FILTER_EVEN } from '../../services/filter.service';
import { Filter } from '../../types/Functions';

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

  //! non DI service instantiation
  filterService:FilterService;
  numberArr:number[];
  _FILTER_EVEN:Filter;

  // constructor(private route: ActivatedRoute,
  //             private viewportScroller: ViewportScroller,
  //             private filterService: FilterService) {}
  constructor(private route: ActivatedRoute,
              private viewportScroller: ViewportScroller) {

                //* non DI service instantiation
                this.numberArr = [1,2,3,4,5,22,10,12,110,134];
                this._FILTER_EVEN = FILTER_EVEN;
                this.filterService = new FilterService(this.numberArr, this._FILTER_EVEN);
              }

  ngOnInit(): void {

    // TODO: ** Filter Service Testing Environment
    // let numberArr = [1,2,3,4,5,22,10,12,110,134];
    console.log(this.filterService.filteredArray);


    // TODO: ------------------------------------


    let resolvedMeteorites:IMeteorite[]|NasaError = this.route.snapshot.data['resolvedMeteorites'];

    if (resolvedMeteorites instanceof NasaError) {
      console.log(`Meteorite Container component error: ${resolvedMeteorites.additionalMessage}, ${resolvedMeteorites.message}`);
    } else {
      this.meteorites = resolvedMeteorites.filter(e => +e.mass > 25000);
      this.visibleMeteorites = this.meteorites.slice(0);
    }
  }

  toggle():void {
    this.show = !this.show;
    if (this.show) this.toggleButton = 'Hide';
    else this.toggleButton = 'Show';
  }

  filterNew(e):boolean {
    this.meteoriteDate = new Date(e.year);
    this.meteoriteYear = this.meteoriteDate.getFullYear();
    return this.meteoriteYear >= 1950;
  }

  filterToggled(filterBy:string):void {
    this.filterBy = filterBy;
    if (this.filterBy === 'new') {
      this.visibleMeteorites = this.visibleMeteorites.filter(e => this.filterNew(e))
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

/*

                                TODO:
  - Separate logic into external services
  - Create interfaces

  Services:

  - filter-service
  - sort-service

  Interfaces:

  - returned data from services? We'll see.



  todo HOW FILTERING IS WORKING

  1. takes response from server with JSON, immediately filters for mass over 25000 (have this as an adjustable paramater)
  2. makes copy of that array and uses that for display and mutation
  3. on OnChanges based on filterBy, calls filter on visibleMeteorites, and calls another function filterNew(e)


  filterNew:
  - gets date from meteorite object as string
  - converts to date
  - formates the date in another line of code
  - filters by meteorites over 1950
  todo: filterby year should be a dynamic prop

  sortMeteorites:
  - checks value of sort argument
  - if equals massDesc, calls .sort on the array and sorts in descending order
  - else, sorts by alphabetical
  todo: I don't mind the logic here, keep as is or just add sort mass Ascending option as default or another option

  todo: meteoriteDate and meteoriteYear should not be properties on this Component. They should be gone with the service, but otherwise they should be constants in the function scope only.




  Possible Values:
  filterBy: default || new
  sort: default || massDesc
*/
