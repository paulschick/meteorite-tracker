import { Component, Input } from '@angular/core';
import { IMeteorite } from 'src/app/models/meteorite.model';

@Component({
  selector: 'app-meteorite-detail',
  templateUrl: './meteorite-detail.component.html',
  styleUrls: ['./meteorite-detail.component.scss']
})
export class MeteoriteDetailComponent {
  @Input() meteorite: IMeteorite;
}
