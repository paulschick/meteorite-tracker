# Scaffolding the APD Module

See notes in material folder.  

Creating an APD module.  

- display 10 Astronomy Picture of the Day images on a view
- Allow click for detail view that has a larger image, as well as information about the image
- First image, top left should be today's image
- Images are 1 day prior going to the right and down, 10 total
- The service will have to calculate the dates, and add to the query url to get each picture
  - Save to array of 10 objects
- component will subscribe to this, then output one in each element.  

I'm going to do it this way for now.
When done, I can try to hook up a resolver to deal with the loading.
Since I'm unsure how to do the logic with a resolver, I will add that later if I have time to do so.  

For now, service that can subscribe to the API request as a method, and then save 10 objects to array.  

Need to have error handling, make sure that it will continue if one API doesn't return the expected.
Should keep trying new date-urls until it has an array of 10 objects.  

Pretty big piece of the project, but good learning experience.  

- [Scaffolding the APD Module](#scaffolding-the-apd-module)
  - [Creating the Pieces](#creating-the-pieces)

## Creating the Pieces

- APD module
- apd page component (main)
- apd detail component
- apd service
- apd model (might already be able to use the one in shared)  

If this works well with the apd page componenet being the top parent, I will refactor the meteorite view to mirror this.
I know that that group of components can be cleaned up.
Do this first to gain an understanding before going and trying to break that!
