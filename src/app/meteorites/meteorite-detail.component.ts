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
  styles: [`
    .bold { font-weight: bold; },
    .meteorite-details {
      margin: 1em 6em;
      background-color: rgb(139, 166, 196);
      -webkit-box-shadow: 1px 2px 12px -2px rgba(0,0,0,0.55);
      box-shadow: 1px 2px 12px -2px rgba(0,0,0,0.55);
      color: #fff;
     },
     .meteorite-details:hover {
       background-color: #26c6d1;
       color: #fff;
       cursor: pointer;
     }
  `]
})
export class MeteoriteDetailComponent {
  @Input() meteorite:any
}
