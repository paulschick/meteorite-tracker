import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-detail',
  templateUrl: './meteorite-detail.component.html',
  styles: [`
    .bold { font-weight: bold; }
  `]
})
export class MeteoriteDetailComponent {
  @Input() meteorite:any;
  @Input() filterBy: string;
}
