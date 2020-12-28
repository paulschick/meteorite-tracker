import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { HomeService } from '../../home.service';
import { IMeteorite } from '../../../../shared/models/meteorite.model';
import { NasaError } from '../../../../shared/models/nasaErrors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-list',
  templateUrl: './meteorite-list.component.html'
})
export class MeteoriteListComponent implements OnInit, OnChanges {
  meteorites:IMeteorite[];
  visibleMeteorites:IMeteorite[];
  @Input() filterBy:string;
  meteoriteDate:Date;
  meteoriteYear:number;

  constructor(private homeService: HomeService,
              private route: ActivatedRoute) {  }

  ngOnInit() {

    let resolvedMeteorites: IMeteorite[] | NasaError = this.route.snapshot.data['resolvedMeteorites'];

    if (resolvedMeteorites instanceof NasaError) {
      console.log(`Meteorite List component error: ${resolvedMeteorites.additionalMessage}`);
    } else {
      this.meteorites = resolvedMeteorites.filter(e => +e.mass > 25000);
      this.visibleMeteorites = this.meteorites.slice(0)
    }
  }

  ngOnChanges() {
    if (this.filterBy === 'new') {
      this.visibleMeteorites = this.visibleMeteorites.filter(e => this.filterNew(e))
    } else {
      this.visibleMeteorites = this.meteorites
    }
  }

  private filterNew(e):boolean {
    this.meteoriteDate = new Date(e.year);
    this.meteoriteYear = this.meteoriteDate.getFullYear();
    return this.meteoriteYear >= 1950;
  }
}
