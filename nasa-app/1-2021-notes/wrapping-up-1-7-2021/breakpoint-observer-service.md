# Creating a Reusable Function

I need to turn the breakpoint service/directive/breakpoint class into something that can be implemented on any component without much change.
If using the same breakpoints, this should actually already be able to go out of the box.

- [Creating a Reusable Function](#creating-a-reusable-function)
  - [Code Involved](#code-involved)
  - [Components](#components)
  - [Update](#update)
  - [Styling the Grid](#styling-the-grid)
    - [Identifying the Problem](#identifying-the-problem)

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

## Update

Okay so this has to work a bit differently than expected.
Both the `mat-grid-list` and `mat-grid-tile` need to be in the presentation component's template.
This component will receive the column number from the parent through an Input property.
This is tested, and this is working for applying the column number.  

The services and the directive will remain on the parent, as this is the only one allowed to manipulate the state (planning on adding `OnPush` to all children throughout the application)

## Styling the Grid

I need to do some initial styling for this.
So the breakpoint is being applied dynamically, it is working.
There is something with the styling on either the container or the presentation component that is preventing the images from expanding into more than just one column.
You can tell that the grid columns are changing as you can see the breakpoint, however there is a width in there or something getting in the way.

### Identifying the Problem

I believe that the problem is that with the current setup, what is happening is for each item in the astro-pics array, a full `mat-grid-list` is being generated, rather than just a tile.  

So really I do need the `mat-grid-list` to be on the container, or I need that to be outside of the `*ngFor`
