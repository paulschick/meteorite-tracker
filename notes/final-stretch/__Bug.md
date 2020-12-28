# Problem with Astronomy Pics

I know see the problem.
Every time you navigate back to the Astronomy-pics view, the application makes another request to the API.
Instead of either replacing the images already there, or just using the cached resources, it just adds another 10 to the UI.
So you'll have 10 images the first time, 20 the second time, 30 next, and so on.
This must be an issue with the service.  

I need it to clear out the prior array before adding more to it.
I truly don't know how to fix this, I'll have to work with it.
