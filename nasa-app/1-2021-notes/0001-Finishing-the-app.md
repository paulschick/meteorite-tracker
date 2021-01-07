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
