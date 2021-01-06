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
  - [Error Checking](#error-checking)
  - [Cleanup and Structuring](#cleanup-and-structuring)
    - [Design for UX](#design-for-ux)
    - [Styling](#styling)
  - [Object Oriented Design](#object-oriented-design)
  - [Loading Solutions](#loading-solutions)
    - [Here's a walkthrough Article](#heres-a-walkthrough-article)
  - [1/6/2020 Creating a Loader Service, Interceptor, and Component](#162020-creating-a-loader-service-interceptor-and-component)
    - [In Regards to Loading on the Random Image Page](#in-regards-to-loading-on-the-random-image-page)
    - [Dirty Option](#dirty-option)
    - [Use the Loader service directly](#use-the-loader-service-directly)
    - [State -> loading: false, settimeout: true](#state---loading-false-settimeout-true)
    - [State -> loading: true, settimeout: true](#state---loading-true-settimeout-true)
    - [State -> loading: true, settimeout: false](#state---loading-true-settimeout-false)
    - [State -> loading: false, settimeout: false](#state---loading-false-settimeout-false)
  - [Loading Logic](#loading-logic)
    - [Functional](#functional)
  - [Moving Forward with Random Image Page Component](#moving-forward-with-random-image-page-component)

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

Successfully emitted Subject from `ClickHandlerService`, and successfully subscribed to this in `RandomImagePageComponent`.
Next this needs to be outputted to a DOM element.  

It's now working, I just need to hook it up to the breakpoints.

## Error Checking

So this is working now.
But, I put the validation in there that you can't do more than 24 random images.
So I need to have this input in the directive too.
So if the user enters 25 or more, it will default to 24.  

Working again, added if statement to the directive:  
If the user puts `>=25` in the template, the value defaults to 24.  

This could be changed later.  

Also, I should add some loading animation for the page, like if they click before it's done loading.
This would require state management, may need ngrx for this, so it's down the road.
When there is loading implemented, then you should be allowed to do more than 24 images.

## Cleanup and Structuring

Time to clean up these components.
Main contains all of the comments, which could be helpful, push the other branch up before cleaning.  

A way of thinking about Angular architecture is to have a main parent component that handles all of the data, communicates with services.
Then you would have child components that actually create the display.

### Design for UX

This page really needs to have a loading state implemented.
It could be as simple as disabling the button while the array is undefined.
That actually might be pretty easy to do.  

This is definitely the next thing, and if I can figure out how to do that, I can also have an element display when the state is "loading" and go away when it is ready.

### Styling

Random Image page absolutely needs a fair amount of styling too.
Not just styling, but thinking about a little UX, it would be helpful for people stumbling on the website to know what they're looking at.
Add more information to the application too, and definitely the documentation.  

It may be a developer's project, but one way to differentiate myself is through being a talented developer *and* very strong in design.

## Object Oriented Design

So right now, I have some if/then areas.
A big one is revolving around the random image functionality.
One cannot use a number greater than 24 at this time, which was hard coded, and also, displaying images stops when the end of the array is reached.
Additionally, there is some lag time up front while the component is instantiating the array of images.  

So, on the if/then node tree, we have an if/then for if someone wants more than 24 images.
There should be some type of interaction.  

More importantly, for the user experience, there is no indication that the page is loading.
There should be a loading component that is used in here.
The functionality may need to come from the service that's making the request, or from something watching the property in the component that will ultimately hold the resulting array of object.  

While that array is empty or undefined, loading state is true.
While that array has length > 0, then the loading state is false.
The array will not have a length > 0 until the entire array is filled based on the way that the current functionality is designed.

## Loading Solutions

1. Loading Interceptor
   1. Just implement this functionality for all of the areas with HTTP requests  

[Here is one resource to consider](https://stackoverflow.com/questions/49385369/angular-show-spinner-for-every-http-request-with-very-less-code-changes)  

I don't think that this first one is the best example.
But, I do think that loading spinners should be a sort of a "starter kit".
So with my dark mode project starter, really this should have a loading spinner interceptor and routing at least.  

### [Here's a walkthrough Article](https://www.freakyjolly.com/http-global-loader-progress-bar-using-angular-interceptors/#.X_W1PthKiiN)

- The service should broadcast `isLoading`
  - `BehaviorSubject` observable
- Also Loader Interceptor to keep HTTP calls stack and handle errors
- Have `MyLoaderComponent` or equivalent function
- **Custom loader component goes into the app component template**
- App Module updated with Interceptor, Loader Service, Component

## 1/6/2020 Creating a Loader Service, Interceptor, and Component

[Followed this tutorial](https://www.freakyjolly.com/http-global-loader-progress-bar-using-angular-interceptors/#.X_W1PthKiiN)  

And this does work, of course the loading times are so quick.  

[here is where you can get loading svg files](https://loading.io/)  

So by increasing the number of images request for the random image component, this should be on the screen.

### In Regards to Loading on the Random Image Page

Right now, if you click the button before the array is loaded, it will increase the integer associated with clicking, but it will not display any images, because the array is empty.
So what I need to happen is for that property to not iterate while that array is empty.  

This, unfortunately, may require some refactoring.
Unless of course, I'm able to just have the button be disabled and display the text 'loading...' while it is empty.
I can probably use lifecycle methods in the random image page component.

- Adding `@Input()` to the originally empty array is fine, now to see if it will be detected by `ngOnChanges`  

### Dirty Option

I can use `setTimeout()` to automatically disable the button for 2 seconds before allowing it to be pressed.
While this is not ideal, it will put a bandaid on the problem.
I can also display the loader svg while the button is disabled.

### Use the Loader service directly

The console is outputing the state in regards to loading in the console.
I can try to get the true/false from the service, and have that property determine the disabled status/loading image on the screen.
Basically subscribe and use `distinctUntilChanged()`  

I like this option the best.
Might as well use what is there.
The true/false in the console does directly correspond with the images being loaded or not, so this is the move.
Use the interceptor that's there instead of trying to mess with the source code of the directive/services that are controlling the request and passing the data with the images to the component.  

For now, I'm actually going to use a combination of the service and the dirty method.
I am able to get the loading state from the service, and this works fine.
But, since I'm not using a route resolver, the initial loading state is `false` when the component loads, and then it receives the information that the loading state is `true`.
So, I can set a timeout that will sort of coincide with how long it takes to receive the information that the loading state is true.
All I want to do in the set timeout is to have the button be disabled, and the rest  of the state will work.  

### State -> loading: false, settimeout: true

- button is disabled, component in not-loading state

### State -> loading: true, settimeout: true

- button is disabled, component in loading state

### State -> loading: true, settimeout: false

- component in loading state, button is disabled in this state

### State -> loading: false, settimeout: false

- component in not-loading state, button is clickable  

## Loading Logic

setTimeout only needs to be one second.  

[Update class with settimeout](https://stackoverflow.com/questions/42681164/angular-2-update-class-with-settimeout)  

Okay, so the setTimeout is working, and the button is disabled until that timeout is complete.
By the time the button is able to be clicked, the loading state is true, meaning that the component knows that the HTTP request is still loading.  

This is exactly what I want so far.
Now I need to have another HTML element with the svg, that uses an `ngIf` to display only when loading is true.  

### Functional

So, the way that the loading spinner is styled, I don't even need to disable the button, and it works properly.
The spinner component fills the screen, so there is no ability to click the button anyway.
Awesome.  

## Moving Forward with Random Image Page Component

Now that I have the working spinner, I can consider allowing requests for larger than 24 images.
Or, I can add additional functionality, meaning, when the array reaches the end, it can just make another request instead of console logging that the array is empty.  

I like this option, because I don't want that first request to take too long, and 24 images is a pretty decent load time.
It's not so long that it's annoying, but any longer and it would start to be a problem.
