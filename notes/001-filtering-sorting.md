# Filtering and Sorting Meteorites

I'm getting the data from the service in meteorite-list component.
I need to filter and sort it through functions here.
The tough part is making sure that the ngFor is outputting the proper stuff.  

I can just have three different ones.
If sortings & filtering are both false, then return all.
Then there's one for sorting is true, and another for filtering is true.  

So three total divs, two will always be not loaded, one will always be loaded.  

Each will bind to a different property:

1. meteoriteAray -> contains all returned meteorites
2. filteredArray -> contains filtered meteorites
3. sortedArray -> contains sorted meteorites  

That should be it. I might just be making it too complicated.  

These will be in the Service. Then, we can have three different elements that are either loaded or not in the DOM if their property is there.
Filtered by mass over 100000, etc.  

Maybe the reason in Pluralsight that the session filtering and stuff is in the component is because it's part of an Event, and the event service wouldn't deal with that.
I'm filtering the data being returned, so that should be in ther service.

## Filter Function

The following function successfully filters to the console.
Still having trouble displaying the visibleMeteorite array through property binding.

```ts
filterFunction(meteoriteArray) {
  console.log(typeof(+meteoriteArray[0].mass));
  let visibleMeteorites = meteoriteArray.slice(0);
  visibleMeteorites = meteoriteArray.filter(meteorite => {
    return +meteorite.mass > 100000;
  })
  console.log(visibleMeteorites);
}

// this filters by mass
// current iteration prints to console meteorites over 100,000
```

I don't need to have visibleSessions as an input property.
That's a property only for the meteorites-list component. For the detail component, it only knows about 'meteorite'.

*ngFor -> this refers to the parent. The first word is the iterator.
So if visibleMeteorites is the array that is to be displayed, it*should* be:

```html
<mt-detail *ngFor="let meteorite of visibleMeteorites"></mt-detail>
```

Since the iterator in the for loop is still meteorite, refering to a single meteorite in visibleMeteorites, the property binding expression might be able to stay as is.

```html
<mt-detail *ngFor="let meteorite of visibleMeteorites" [meteorite]="meteorite"></mt-detail>
```

## Current State

Right now, this is filtering by default onInit. It's pulling meteorites with mass over 75000.
That's fine, at least it's working.
This could be improved by buttons having a different filtering option.
Then we'd have ngOnChanges, and that is applied when a button is pressed, else, there's the default filter.  

So, should ngOnInit take in a filtering function, and does that work?
I should put the current filtering logic in a function (just like whats in the filter(), not the whole thing) and make sure that this isn't a gotcha.

## Next Step

Okay, so now I can follow back along with some of the things done in PluralSight.
I want to have three cases for filtering:

1. Default (over 75000 mass)
2. Button 1
3. Button 2  

So there's three cases. Init filter will be over 75000, that's the default, that goes in ngOnInit.
The other ones will have to be in an ngOnChanges call.  

1 Filtering Option: after 1950 (not much else that is very interesting to filter by, unless it was another date range, like pre-1950 instead)

- Current logic works in terms of using an if statement to pass differing logic into the filter method
- Right now it's all going through ngOnInit, I need to get that into ngOnChanges.
- So, I'll need to use visibleMeteorites, and I'll need to have visibleMeteorites being in the *ngFor (should not need to change the other property binding.)  

## 010 Filtering Event

The logic for ngOnChanges is all in place, the filtering logic should be solid.
To truly test, I need to have an event in place with the button.
When the button is pressed the value of filterBy needs to change to 'new', then this will set off the filter, and save the changes to the instance of visibleMeteorites.

ngOnChanges is not working coming from the same component. The button may need to be an Input parameter to meteorite-list, or I'll need to find a different solution.  

I could create a component to deal with the button. This would have the property filterBy, and set the default value.
The problem is that the meteorite-list component would need to be passed into this component, as it needs to be the parent.  

so the new parent class could be the main page, and the only real content is the div with the button.
Then, the meteorite-list component can be nested in it as it's child.
meteorite-list can then have an @Input() property of filterBy, and this way, the ngOnChanges will fire when the change in the filterBy property comes from pressing a button that is on its parent.  

Seems that it will have to be this way.  

Merge to keep the notes, go into a new branch to develop the new component. That solution really won't take as long as it sounds.

## 011 Meteorite Display Component

This is the name I came up with. All that needs to be here is the markup for the div and button for "Filter Meteorites".
Pass meteorite-list selector into its template. Start there.  

And this worked exactly as planned. With filterBy changing through the Input property, ngOnChanges is initiated and the data is sorted.  

NEXT  

I need to be able to toggle it back and remove the filter. Is there a way to have a button as a toggle?  

One way that I know is for the button to toggle a class... However I don't think I need to change everything again to implement a class toggle.  

Add another button for default view.

## 012 Meteorite Default Filter

Alright that was super simple. Just added else if to ngOnChanges and set it back to this.meteorites.slice(0).
Just went back to the same functionality as the initial sorting.
I knew that this.meteorites property was still there with that initial data. So that's good to be able to have that on hand.  

I like that the array is cloned and then displayed. This gives a lot of options for displaying different sets of data.  

Okay what's next?  

How about implementing a model interface. This application isn't very strongly typed. Could have some challenges with the data coming in vs. the data that I'm working with in the components.

## 013 01 Meteorite Model

Heres the shape that's displayed:

```ts
export interface Meteorite = {
  name: string
  mass: string
  year: string
}
```

I believe that coming in, it's all strings.
Then conversions are done to work with the data, particularly converting mass and year (which is really a full date) to numbers.  

So, I can create a model for the response, and for the useable data, or I can have one model and apply it to the data that gets used in the component.
But, then I won't have a model to apply to the incoming data.

### Todo

- Meteorite Servive: set up error handling like in Pluralsight HTTP course.
  - Create interface to use for the handleErrors method (or whatever new method)
- Create interface for API Observable response
- Create interface for meteorite data used in meteorite-detail component  

So there are 3 models that need to be made:

1. A get request error handler model
2. A successful get request data model (shape of the initial Meteorite data that is returned from REST endpoint)
3. Meteorite data that is displayed in the UI in the meteorite-list component.

### Done

- Set filtering functions to type boolean.
