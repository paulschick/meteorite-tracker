import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit {

  @Output() notify = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
