import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-detail',
  templateUrl: './meteorite-detail.component.html',
  styles: [``]
})
export class MeteoriteDetailComponent {
  @Input() meteorite:any
}
