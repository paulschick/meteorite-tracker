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
