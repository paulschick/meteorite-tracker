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
