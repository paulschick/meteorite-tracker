# Creating a Reusable Function

I need to turn the breakpoint service/directive/breakpoint class into something that can be implemented on any component without much change.
If using the same breakpoints, this should actually already be able to go out of the box.

- [Creating a Reusable Function](#creating-a-reusable-function)
  - [Code Involved](#code-involved)
  - [Components](#components)

## Code Involved

There are three files (with the current iteration) that need to be implemented in the component:

- ObserveBreakpointsDirective
  - Selector: `mtObserveBreakpoints`
- MaterialBreakpointsService
  - First thing to be changed, simply contains the object with grid column numbers which is injected in the component of interest
- EvaluateBreakpointService
  - Service that takes in the info from the directive

## Components

This should involve two components in total:

- DailyImagesContainerComponent (container)
- AstronomyPicsThumbnailComponent (presentation)  

The child won't deal with the state at all, just needs to be altered at the template-level to make it a `mat-grid-tile`.
The container template will need to have a `mat-grid-list`, but the component will need to inject the services.
The directive will be in the container template on the `mat-grid-list`, as this is where the columns are going to be dynamically set.
