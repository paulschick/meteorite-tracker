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
