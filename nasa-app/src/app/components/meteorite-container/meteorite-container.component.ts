import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// models
import { IMeteorite } from '../../models/meteorite.model';
import { NasaError } from 'src/app/models/nasaErrors.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-meteorite-container',
  templateUrl: './meteorite-container.component.html',
  styleUrls: ['./meteorite-container.component.scss']
})
export class MeteoriteContainerComponent implements OnInit, OnChanges {

  filterBy:string = 'default';
  sort:string = 'default';
  show:boolean = false;
  toggleButton:string = 'Show';
  private meteorites:IMeteorite[];
  visibleMeteorites:IMeteorite[];
  private meteoriteDate:Date;
  private meteoriteYear:number;

  constructor(private route: ActivatedRoute,
              private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    let resolvedMeteorites:IMeteorite[]|NasaError = this.route.snapshot.data['resolvedMeteorites'];

    if (resolvedMeteorites instanceof NasaError) {
      console.log(`Meteorite Container component error: ${resolvedMeteorites.additionalMessage}, ${resolvedMeteorites.message}`);
    } else {
      this.meteorites = resolvedMeteorites.filter(e => +e.mass > 25000);
      this.visibleMeteorites = this.meteorites.slice(0);
    }
  }

  ngOnChanges():void {
    if (this.filterBy === 'new') {
      this.visibleMeteorites = this.visibleMeteorites.filter(e => this.filterNew(e))
    } else {
      this.visibleMeteorites = this.meteorites;
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
