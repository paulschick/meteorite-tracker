# Section 06 - Displaying Real Data

I'll follow along, should be able to get some ideas on how to display the meteorite list/detail components.

- [Section 06 - Displaying Real Data](#section-06---displaying-real-data)
  - [Data Service & Fetching Data](#data-service--fetching-data)
    - [Steps that he's taking as I follow along](#steps-that-hes-taking-as-i-follow-along)
    - [What I'm going to do](#what-im-going-to-do)

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
