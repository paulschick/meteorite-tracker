import { Component } from '@angular/core';

@Component({
  selector: 'mt-root',
  // replace Bootstrap classes where appropriate
  // after creating meteor-list component, probably move this to separate template file.
  template: `
    <mt-display></mt-display>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
