import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meteorite-detail',
  templateUrl: './meteorite-detail.component.html',
  styleUrls: ['./meteorite-detail.component.scss']
})
export class MeteoriteDetailComponent {
  @Input() meteorite:any
}
