import { Component } from '@angular/core';

@Component({
  selector: 'mt-root',
  // replace Bootstrap classes where appropriate
  // after creating meteor-list component, probably move this to separate template file.
  template: `
    <h1 class="text-danger py-4 text-center">{{ title }}!!</h1>
    <div>
      <mt-list></mt-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meteorite Tracker';
}
