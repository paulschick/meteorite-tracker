# Section 06 - Displaying Real Data

I'll follow along, should be able to get some ideas on how to display the meteorite list/detail components.

- [Section 06 - Displaying Real Data](#section-06---displaying-real-data)
  - [Data Service & Fetching Data](#data-service--fetching-data)
    - [Steps that he's taking as I follow along](#steps-that-hes-taking-as-i-follow-along)
    - [What I'm going to do](#what-im-going-to-do)
  - [Extended Astronomy Picture of the Day](#extended-astronomy-picture-of-the-day)

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
