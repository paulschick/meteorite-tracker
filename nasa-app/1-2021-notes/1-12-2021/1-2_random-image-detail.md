# Routing From Random Image Detail Page

Right now, this is using the astro pics detail component to render the random image detail.
The only alteration that I need is for the back button to go back to the random image view and not the astro-pics page.  

In order to do this, I will use a different route to render the random image detail view, not the same astro-pics/image/:id route.
This route will render the same component, I don't need to make a new one.
To accomplish this, I'll need to access the route from within the component.
The component will look at the route, and use a ternary operator to determine the route that the back button should implement.
I can do this by setting a property value based on the route, or just do it directly.
If I go the property route, this will be like filtering/sorting in a way, I can set it directly in the template based on the value of the property.

## A look at AstronomyPicDetailPageComponent

This is the component that I'll be using.
It is already using `ActivatedRoute` and looking at the parameter in the route.  

using `snapshot` is a strategy that should be used only if you intend not to update the route while the component is loaded.
This is the case for the current iteration and for the new iteration.  

`paramMap` works when there is a parameter in the url.
For example, I can use `paramMap.get('date')` in the current implementation, because the url is built as `/astro-pics/image/:date`.
I'll need to use something else to see if the url contains a certain string.
I can probably convert the url to a string and do a comparison.  

This solution works as an example:

```ts
this.urlGetTest = this.route.url.pipe(
  map(segments => segments.join(''))
);
this.sub = this.urlGetTest.subscribe(
  data => this.currentRoute = data
);
console.log(this.currentRoute);
```

Next, I need to create the new route, which will load this component.

- New route added and functional, next to check the url to see which page it is one

## Building the Dynamic Button

These changes will have to happen in two components:

- `AstronomyPicDetailPageComponent`
- `AstronomyPicDetailComponent`  

Both the parent and child are involved.
The parent should pass in the url information and the child should take this as an Input property.
Based on the Input property, the button will route to different views.  

Here is how the difference in these url strings look:  

From astro-pics: astronomy-picsimage2021-01-02  
From random image: random-imageimage2009-06-09  

if contains random-image, `this.currentRoute.includes('random-image) then do something`.  

Returning a boolean -> true if from random image page, else false.  
Here is the class for AstronomyPicDetailComponent with the logic:

```ts
export class AstronomyPicDetailComponent implements OnInit {

  @Input() astroDetailImage:IApd;
  @Input() currentRoute:string;
  routedFromRandom:boolean;

  ngOnInit() {
    this.routedFromRandom = (this.currentRoute.includes('random-image') ? true : false);
    console.log(this.currentRoute);
    console.log(this.routedFromRandom);
    // This will return true if routed from the random image view and false if it came from the astro-pics gallery

  }
}
```
