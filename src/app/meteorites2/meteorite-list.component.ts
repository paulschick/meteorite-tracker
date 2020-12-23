import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { DataService } from '../core/data.service';
import { IMeteorite } from '../models/meteorite.model';
import { NasaError } from '../models/nasaErrors';
import { NasaErrorHandlerService } from '../core/nasa-error-handler.service';

@Component({
  selector: 'mt-list',
  template: `
    <div class="container meteorite-list-wrapper">
      <mt-detail *ngFor="let meteorite of visibleMeteorites" [meteorite]="meteorite"></mt-detail>
    </div>
  `
})
export class MeteoriteListComponent implements OnInit, OnChanges {
  meteorites:IMeteorite[];
  visibleMeteorites:IMeteorite[];
  @Input() filterBy:string;
  meteoriteDate:Date;
  meteoriteYear:number;

  constructor(private dataService: DataService) {  }

  ngOnInit() {

  }

  ngOnChanges() {

  }



}
