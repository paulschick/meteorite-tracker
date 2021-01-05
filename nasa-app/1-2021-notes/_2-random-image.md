# Back To The Random Images

1. Remove the route resolver from the random-image route -> Done
2. Create separate service to make the HTTP call for the random image -> Done
3. Replace the astro-pics service with the new service in this component -> Done
4. Write a test for this service if it's used by a component with no other dependencies, or write a test for the service itself - Done  

- [Back To The Random Images](#back-to-the-random-images)
  - [RandomImagePageComponent Functionality](#randomimagepagecomponent-functionality)

## RandomImagePageComponent Functionality

- Consider the utility of having the `RandomImageComponent` child component instead of just a single `RandomImagePageComponent`
  - Do I need the child to emit to the parent?
  - Can all functionality be controlled by the parent?
  - **ACTION**: attempt to create the button on the parent, control the directive with that
- In the same vein, can I combine `EvaluateBreakpointService` and `MaterialBreakpointService` and then take the `subscribe()` logic from the `RandomImagePageComponent` and move this into the combined service?
  - The object in `MaterialBreakpointService` can just be in the service that uses it
  - The goal of the service file would be to watch the screen, compare to the Object standard breakpoints, and deliver the resulting number of columns to the component that it is injected in.
    - The component shouldn't need to do all of this.  

I'll leave the current services alone as `EvaluateBreakpointService` is emitting an Observable.
It may be possible to combine others, but I'll leave that one as is.
I prefer one function per file where possible.  

The logic in the component should stay right now too.
I don't have a problem with the subscribe in the component.
I am going to try and keep this to one component if possible, though, or have all the functionality in the child as a controller and then just use the parent as a display component.

- Moved button to page component
- Disconnecting random-image component -> commented out import/declaraion in app module  

- Next, need to subscribe to the service http get request
- Then save to instance and start working on outputing to the DOM  

Remember, the click is being handled by `ClickHandlerService`. So I don't need a child component to `Output` the event to a parent.
