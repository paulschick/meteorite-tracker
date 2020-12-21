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
