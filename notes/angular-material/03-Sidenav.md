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
