import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-astronomy-pics-thumbnail',
  templateUrl: './astronomy-pics-thumbnail.component.html',
  styleUrls: ['./astronomy-pics-thumbnail.component.scss']
})
export class AstronomyPicsThumbnailComponent implements OnInit {

  @Input() astronomyPic:any;

  constructor() { }

  ngOnInit(): void {
  }

}
