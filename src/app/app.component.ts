import { Component } from '@angular/core';

@Component({
  selector: 'mt-root',
  // replace Bootstrap classes where appropriate
  // after creating meteor-list component, probably move this to separate template file.
  template: `
    <mt-sidenav></mt-sidenav>
  `
})
export class AppComponent {

}
