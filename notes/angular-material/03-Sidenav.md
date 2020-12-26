# Section 05

## Adding Responsiveness

Now, we'll bind to these properties so that we can do true property binding.
This is the whole point of Angular 😊.  

- Added public property `isScreenSmall` to sidenav component.
- Injected `BreakpointObserver` from angular/cdk/layout  

In ngOnInit(), just breakpointObserver

- Observe small width breakpoint, which was set as a variable of 720 outside of the class
- Subscribe to the BreakpointState, watch the size of the screen.
- When the state matches the break point state, then isScreenSmall as a boolean, will be true or false

## Creating a Toggle Button

The 'open sidenav' button is going to be moved to the toolbar.  

I would, additionally, like to be able to close the sidenav from the larger screen.
Additionally, I don't think I'll keep this being automatically open on a larger screen.  

Fixed already, changed the onClick from `sidenav.Open()` to `sidenav.Toggle()`.
I'm going to keep all of this code in an additional folder.
Good to have on hand.  

Originally, we have a click event in the button.
What we'll do is have a `toggleSidenav()` event in the toolbar, which will call `sidenav.toggle()`.
Effectively, this takes the place of the button below the toolbar that we have been using.  

### sidenav.component.html

1. Delete the button
2. Add event-binding toggleSidenav connected to sidenav.toggle()  
   1. toggleSidenav (child event)
   2. sidenav.toggle() -> parent response

### toolbar component

**html template**

1. Added button
2. event emitter -> click event, toggleSidenav.emit()  

**ts component file**  

1. Add Output property `toggleSidenav` as new EventEmitter  

***IMPORTANT*** this wouldn't initially compile because vs code with smart import, imported EventEmitter from 'Events' instead of @angular/core, where it is supposed to come from.  

- Added styling in comment to hide the button
- I always want the toggle button to be there
- Added additional styling to the toggle, as well as mat-icon within that class  

Now, I am going to use a card to display the text "Astronomy Picture of the Day"  

Component: apd.component.ts  

Todos:

1. Create apd template, move html to there
2. Add the markup for the card as well as any SASS  

- Added wrapper div around router-outlet in sidenav with 50px of margin all around content
- Added styling to apd scss file for image and image wrapper
- added styling for card and image and test
  - Utilized scss mixins
  - THESE MUST GO into partial scss files to be imported to the main file
    - Just putting some in the main while working through and learning
