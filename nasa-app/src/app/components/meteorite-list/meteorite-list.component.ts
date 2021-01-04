import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { IMeteorite } from '../../models/meteorite.model';
import { NasaError } from '../../models/nasaErrors.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meteorite-list',
  templateUrl: './meteorite-list.component.html'
})
export class MeteoriteListComponent implements OnInit {
  meteorites:IMeteorite[];
  visibleMeteorites:IMeteorite[];
  @Input() filterBy:string;
  meteoriteDate:Date;
  meteoriteYear:number;

  constructor(private route: ActivatedRoute) {  }

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
