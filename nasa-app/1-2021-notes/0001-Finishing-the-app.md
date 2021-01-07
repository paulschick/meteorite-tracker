# Final Cut

If intersted in having a static image on the front page, [the one is awesome](https://apod.nasa.gov/apod/image/1601/BrightBoom_JinMa_960.jpg).
It just looks really good with the color scheme of the application.

Home page -> Meteorite Display -> Meteorite List -> Meteorite Detail  

Meteorite Detail has an Input property, which it gets from meteorite list.
Meteorite list has has logic in it and affects state, this should be happening at the top-level component, not the child component.
Meteorite list also takes in the filterBy property as an input prop from Meteorite display.  

So, I should be able to slim this down to three components: meteorite-display, meteorite-list, and meteorite-detail.

- apd can go into display
- Home page component can just go.  

All of the logic, the requests and setting the meteorite property and the filterBy property will be done in the meteorite-display component, which is the parent component.
Also, there will be no request for the APD component.
This will be a static image with the one that I found today, which is an awesome pic.  

Now, I will do the **Container Presentation Pattern** with all of my components.
Additionally, it might be worth using an **Event Bus** service to communicate between the Container `MeteoriteDisplayComponent` and the Presentation component `MeteoriteDetailComponent`.  

- Added the logic from `MeteoriteDisplayComponent` and `MeteoriteListComponent` to the new `MeteoriteContainerComponent`.
- Successfully filtering the meteorites through an Input and Output property from meteorite-container to meteorite-list and back
  - The filter button needs to be on the meteorite-list component so that it can emit the event
  - I will do one button instead of two. It's a little bit nicer functionality to demonstrate.  

## Side-By-Side Child

I need another child component on the same level as the `MeteoriteListComponent`.
This component will have the filter button and handle that logic.
The reason is because the meteorite list and the button are in two different places.
Putting all of the markup for the button div in the Meteorite List Component means I also have to have the toggle function there.
This is too much state control to the child.  

I just want the filter button to be in there, so I'll have a child specifically for that, and the selector will go right in the div.  

I now have the Home page functionality set up. To finish this, I need to clean up these components and replace the home page components with this.
It's gone from these components: home, apd, meteorite display, meteorite list, meteorite detail; down to meteorite container, meteorite list, meteorite toggle button, and meteorite detail.  

So there is only two less components, but the state is all controlled through one, and it is much more clear what each of the components does.
So I definitely feel like this is a win.
The relationships between the components just make a lot more sense.  

The relationship is now:  

```bash
--- Meteorite Container
|
|___ Meteorite Toggle Filter Button
|
|
|___ Meteorite List
      |
      |
      |___ Meteorite Detail
```

Meteorite detail just takes in the Input property of Meteorite from the list.
It's very nice and concise, definitely a refactor.

### No Longer Need

- apd
- meteorite display
- homepage
- apd resolver service
- home service -> move the meteorite get request to astro-pics service. Rename the service  

### on Services

One real way to make AstroPicsService loosely coupled is to delegate the specifying of the url to the component.
All of these GET requests are literally the same thing.
If that logic is delegated, then this service can be one single function.
If I want to keep the date calculation out of the component, this this can be a method in the service that can be called from the component and passed back into the service.
Or just a public property in the service that the component can access and pass as an argument as a url parameter.  

Benefits:

- One loosely coupled method to handle the generic get requests
  - All of Astro Pics and the Random Image service into one method
- Easier to test  

Other consideration: Not exactly sure how to deal with the resolvers.
Theoretically I should be able to have one resolver that can take in the parameters, because technically this is the service that needs to actually make the call to the service doing the http call.  

For the resolver to work, it needs to be able to receive data about the api call to make for that particular route.
Otherwise, I would have to have two methods in the service

- one to take the arguments from the component
- one to combine it and make the get request -> this would be called by the resolver service  

I could also add all of the url logic into the single resolver.
It could use if/else logic to look at the path url and pass the correct parameters into the get request.
I don't know if it's worth saving the code.  

There is a lot of logic to refactor the resolver properly if I combine the services into just one call.  

## Save This for the Code Review

Write the service that I would want to implement.
This is a solution.
Also say that refactoring the resolver was the "bottleneck" here to having a loosely-coupled http request service.
The point being that I can explain that I don't know how to build the resolver, but I do know how to build the service that I want.

- removed randomImage service and I put that in astro pics -> replaced that in the directive that it is called in
