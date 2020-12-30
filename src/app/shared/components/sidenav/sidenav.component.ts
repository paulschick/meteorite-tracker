import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'mt-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  public isScreenSmall: boolean;

  constructor() { }

  close() {
    this.sidenav.close();
  }

}
