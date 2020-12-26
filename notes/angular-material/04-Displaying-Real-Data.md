# Section 06 - Displaying Real Data

I'll follow along, should be able to get some ideas on how to display the meteorite list/detail components.

- [Section 06 - Displaying Real Data](#section-06---displaying-real-data)
  - [Data Service & Fetching Data](#data-service--fetching-data)
    - [Steps that he's taking as I follow along](#steps-that-hes-taking-as-i-follow-along)

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
  - What I can do is take the logic out of my components by having a separate service that takes the data from the resolver and handles the filtering logic.
  - The components would just take the already built arrays and just display them
  - This might cut down on how many components I'm using for the meteorite section. Could go from 3 to maybe two, one for the main data, one to display each individually
  - Then I can have the meteorite-detail component for displaying a detail view of one of the meteorites.  

Let's try this with another piece of data from Nasa:  

- Find another API to use
- Create service to call the api
- Create resolver for the service
- Create the page component and hook this up to routing with the resolver in the route
- Create another service to take the data from the resolver and perform any logic needed
- Have a component to display the data, or two components with one for the detailed or individual object display in template.
