# Refactoring the Service

I can make an API call to NASA regarding the APOD images that will return an array of objects within a date range, or a certain number of random images.
I'm a little upset that I spent so much time creating a service that makes 10 requests, but this is a much better way to do it.  

Also, I'll make a service to get an Earth pic (EPIC API) to use on the home page instead of a APOD.
Then, I'll have another little function where you click a button to get a random image from the NASA API.
So you can just sit there and keep clicking.
Plus, this demonstrates a service in response to a DOM event, which is good to show.  

- Add in the function to return pics from date range.
- Integrate this with the template
- Phase out the old method and remove
- Move the service into the core folder
- Create service for EPIC earth pic
  - This only has to be static -> same image everytime
- Replace apd service with EPIC and add into the home page.
- Then create module for the random image generator page
- Create the method in the shared astro-pics service in the core module
- Create the components and the page and hook it up, add it into the sidenav.
