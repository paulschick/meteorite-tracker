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
  show:boolean = false;
  toggleButton:string = 'Show';
  meteorites:IMeteorite[];
  visibleMeteorites:IMeteorite[];
  meteoriteDate:Date;
  meteoriteYear:number;

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

  filterToggled(filterBy:string) {
    this.filterBy = filterBy;
    if (this.filterBy === 'new') {
      this.visibleMeteorites = this.visibleMeteorites.filter(e => this.filterNew(e))
    } else {
      this.visibleMeteorites = this.meteorites;
    }
  }

  onClickScroll(elementId:string):void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
