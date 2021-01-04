# Section 06 - Displaying Real Data

I'll follow along, should be able to get some ideas on how to display the meteorite list/detail components.

- [Section 06 - Displaying Real Data](#section-06---displaying-real-data)
  - [Data Service & Fetching Data](#data-service--fetching-data)
    - [Steps that he's taking as I follow along](#steps-that-hes-taking-as-i-follow-along)
    - [What I'm going to do](#what-im-going-to-do)
  - [Extended Astronomy Picture of the Day](#extended-astronomy-picture-of-the-day)
    - [Implementation](#implementation)
  - [setting up the Scaffolding for the APD module](#setting-up-the-scaffolding-for-the-apd-module)

## Data Service & Fetching Data

I have this set up pretty good, still will skim through this.
Probably will end up skipping the majority of this section.  

There is a part of this section on the navigation list.
This is the part that I will come to.
I do need another page or pages to navigate to, meaning I will need to bring in some data.  

What I could do is go through this section, and use a concept that he is using in regards to how data is being displayed.
I will just use another piece of content from the Nasa API.  

### Steps that he's taking as I follow along

- create service through CLI
- Create user model (contact manager), create note model
- Service is using subscription within the service.
  - Interesting, so he actually has a method in the service class that handles the subscribe. This is a good idea.  

### What I'm going to do

Find another API to subscribe to from Nasa.
Create a view for that API, and then create service, resolver, components, and page for that view.
Add to router, add this view and the home view to the sidenav.  

Then the final thing will be to style, and try to add some detail view either to the meteorite list, or to the new component.  

For the new API: Find something that can be clicked for a detail view.
This is something that I should be demonstrating in the application.
Then we're pretty much done with it all except for final style changes and refactoring the sass files.  

## Extended Astronomy Picture of the Day

I can query different images.
So, I can have a gallery image with historical APDs.
I'll keep the current one showcased on the Home Page, and then this can be clicked to go to the full page of them.  

So this will then beg the question, do I keep the APD service in the Home Page?
Or do I grab this from the other view?  

If I keep it in the home page, then I can keep the next view completely separate and lazy load it.
I will try that first.
Just create full new module for APD module, with its own service and resolver and components.  

These images should be able to be clicked to open up an expanded view, which will have other details about the image from the API.
That will be my demonstration of clicking to go to a detail view.
I can get the information on how to construct this from the Angular Fundamentals Pluralsight course.  

[Here is the relevant webpage](https://api.nasa.gov/) that shows the query parameters for the API.  

This method returns the December 1st image:  
<https://api.nasa.gov/planetary/apod?api_key=wj7jAdpeOnwUhXeUR40W9Ll02P7hiJ2N0j5Rv0uY&date=2020-12-01>  

And it works just like that.  

### Implementation

- I'll need to programmatically create the query urls
- The dates will be based on x number of days before today
- Should go in descending order, so today's image will be top left, then it will decend to the right, then down.  

So top left, top middle, top right, down 1 row and left, then middle, then right, and so on.  

So say I want to display 10 images on the page.
Today's image will be first, then it will have to go back 1 day for every image.  

I just need to create a date, subtract 1 for each, then add to the query url using template strings and inputting the date parameter.  

This will all have to be a loop. I can probably use ngFor, but I'll also need to have logic in the service.  

The service will make 10 requests, each with a different date, and then save each response object in an array.
If there is an error, it should make another request with another date to try and get the proper response.
The goal is to have an array of 10 objects.  

Then the component can just take in that Observable object, and the ngFor just outputs a template for each object in the array.  

So this is going to be a bit complex, but I'll start with the scaffolding.  

## setting up the Scaffolding for the APD module

Next notes file.
