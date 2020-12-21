import { Component, OnInit } from '@angular/core';
import { MeteoriteService } from './shared/index';

@Component({
  selector: 'mt-list',
  templateUrl: './meteorite-list.component.html',
  styles: [``]
})
export class MeteoriteListComponent implements OnInit {
  meteorites:any[]
  constructor(private meteoriteService: MeteoriteService) {  }

  ngOnInit() {
    this.meteorites = this.meteoriteService.getMeteorites()
  }
}
