import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-detail',
  template: `
    <div class="py-4 text-center meteorite-details">
      <h2 class="bold">{{ meteorite?.name }}</h2>
      <div>Mass: {{ meteorite?.mass }}</div>
      <div>Year: {{ meteorite?.year | date: 'mediumDate' }}</div>
    </div>
  `,
  styleUrls: ['./meteorite-detail.component.scss']
})
export class MeteoriteDetailComponent {
  @Input() meteorite:any
}
