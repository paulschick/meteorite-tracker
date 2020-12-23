# Astronomy Picture of the Day

- [Astronomy Picture of the Day](#astronomy-picture-of-the-day)
  - [Cleanup and Home Component](#cleanup-and-home-component)
  - [APD](#apd)
  - [001 apd](#001-apd)
  - [002 apd](#002-apd)
  - [003 apd](#003-apd)

## Cleanup and Home Component

So, the meteorite stuff is all together. In implementing a home component, I will need to have routing in this.
So, go back to the Pluralsight routing thing.
Then, I might have to have interceptors.  

## APD

Created folder APD (astronomy picture of the day).
For the model, there is quite a bit of information. I think I'll start with that.  

So, I think that the APD component should just serve the image from the API.
Then it can be put anywhere. I can have the home page and whatever separate.  

So right now, I just have the selector inserted in the app component. This is going to be removed, and will be implementing routing.
I want to get the service and content hooked up and served first.

## 001 apd

new git branch for the service.

- created apd model
- added styling to apd component  

## 002 apd

- Hooked up the service to the component
- store image url to property that can now be displayed in template with property binding to an image  

Issues: I'm getting circular dependency warnings in the console.
Also, my meteorite component is now returning errors for the .slice method.
This is all still working, probably something to do with either:

- loading order
- asynchronous issues  

I'll have to address these, the app has not broken yet.

## 003 apd

Next step is to get an image to display by having the image through property binding.
