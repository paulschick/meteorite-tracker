# Back To The Random Images

1. Remove the route resolver from the random-image route -> Done
2. Create separate service to make the HTTP call for the random image -> Done
3. Replace the astro-pics service with the new service in this component -> Done
4. Write a test for this service if it's used by a component with no other dependencies, or write a test for the service itself - Done  

- [Back To The Random Images](#back-to-the-random-images)
  - [RandomImagePageComponent Functionality](#randomimagepagecomponent-functionality)
  - [Current State](#current-state)
    - [Next Step](#next-step)
    - [Allow for the number of random images to retrieve to be set through the template, and have a default value of 5](#allow-for-the-number-of-random-images-to-retrieve-to-be-set-through-the-template-and-have-a-default-value-of-5)
  - [General Project Finishing Steps](#general-project-finishing-steps)
  - [Outputting the Random Image Objects to the DOM](#outputting-the-random-image-objects-to-the-dom)

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

## Current State

- `RandomImagePageComponent` is using the `appClickHandler` and `mtObserveBreakpoints` directives on the button element. Both are currently functioning as expected
- `ClickHandlerDirective` implements `ClickHandlerService` and `RandomImageService`
  - `@HostListener` listens for the click event, passes on the current click number to the `ClickHandlerService`
  - Subscribes to the get request observable from `RandomImageService`, needs to pass this data to the `ClickHandlerService`
- `ClickHandlerService` receives the click number from the `ClickHandlerDirective`.
  - With each click, currently iterates through a dummy response to output the needed data. This will be outputting the url from the object at the current index in the response array  

### Next Step

The next step is to get the response object from the `ngOnInit` in the `ClickHandlerDirective` into the `ClickHandlerService`.
The directive should either pass this in as an argument to a function or a class instance.  

- Try to pass into a function that exists in the service and just console log.
  - Make sure it's passing the right data, and theirs no weirdness from it being async.  

This works just by passing the data from the subscription directly into the method in the service.
I won't need to store this in an array within the directive.
The service is now able to deal with this data.  

Next, I need to replace the dummy data with the response data.

- Got this wired up, the `getClick()` method is iterating through this array with each click as expected.
- Just to test it, this works with different numbers passed into the request in the `ClickHandlerDirective`.
  - Where should this number come from?
  - Probably should be set in the directive... But could be passed in through the template binding with a default value
    - This way, when used, the developer can add this right in the template
    - Imagine if this were in an npm package, you wouldn't be working with the directive's source code, any customization would be done through the template where it is used, just like when working with Material. This is the next step.  

### Allow for the number of random images to retrieve to be set through the template, and have a default value of 5

- Add an `@Input()` property to the directive called `images`
  - Make type `any` and then make it more selective once it's setup and working
    - Set to `string|number` and passed into the method with `+this.images` so that a string would be converted to an integer
      - Also, takes in `+this.images || 5` so it defaults to 5 if no arg is passed in.  

This is now wired upwith the `RandomImagePageComponent` template, as `[appClickHandler]="3"` and this functions as expected.  

## General Project Finishing Steps

1. Get this functionality completed
2. Write more unit tests
3. Change names to improve ease of understanding, including variable names where applicable
4. Add descriptive comments to the code
5. Create pro-level documentation
6. Publish a final version01 open-source to GitHub
7. Work on deployment steps

## Outputting the Random Image Objects to the DOM

Now to bring this home (at least as functionality is concerned).

- Step 1 is to get the object being logged by the service into the component  

I should have the service emit this as an Observable, then the component can subscribe to it.
