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
