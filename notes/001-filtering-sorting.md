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

## Pluralsight Notes

Taking notes on the search functionality. My implementation is different, but he has to pass search results to a modal component.
Therefore, this may be more similar to my particular situation with this app.

## Load Server

I want to load the Observable from the server, and then have the Get public function that can be called to use the results. The load server function will be a private function.
