# State of the Application 1/11/2021

- [State of the Application 1/11/2021](#state-of-the-application-1112021)
  - [Current State](#current-state)
  - [Next Steps](#next-steps)
  - [Random Image -> Styling -> Media Queries](#random-image---styling---media-queries)
  - [Consolidating random image service](#consolidating-random-image-service)
  - [On Tooltips](#on-tooltips)
  - [TODOS](#todos)

## Current State

- Random image view is designed (initially) and working
  - (Needs to be styled for all viewport sizes -> add Breakpoints functionality to this page, or simply use media queries)
- Majority of functionality is in place, could get away with functionality being finished
- Application needs basic cleanup
- Application could use refactoring towards OOP principles (Don't repeat yourself type stuff)  

## Next Steps

- Style the Random Image generation view (done)
- Move the random image service out of that folder. (done)
  - For now, put this in the astro-pics service file (done)
  - Then, Create a single GET request function that takes in the required args from all components that use a GET request ~~
- Go through all files in app and make sure that all files are properly formatted (for example, that all scss is in the proper partials and not in "temporary dev files" or the main import files for a component)
- Add tests where possible, remove unused tests or empty

## Random Image -> Styling -> Media Queries

- At least temporarily, apply breakpoints directive/service for working with the media queries
  - All that is necessary is to add the directive to an element in the view.
- Add all layout styling
- Add any other design stuff if desired/necessary
- Remove breakpoints directive/service

- Adjusted layout for all media queries
- Next, typography for media queries - just font size
- typography done

## Consolidating random image service

All I'm doing is moving this into the general data service.
Then I'll change all of the imports, have it working, and go from there.

- Refactor the whole service into one (or as few as possible) GET request(s)
- Rename to data service
- Update imports and declarations throughout the application  

Then, I really want to move into making the breakpoints thing into a reusable piece of code, like a library, that would be awesome.
Also do something with the breakpoints service that has the class, doesn't need to be an injectable.

## On Tooltips

So the tooltips are okay, here's one way to make them better:  

Just like the button does, have the tooltip over the filter button change depending on the filter state.

- When default: filter after 1950
- When filtered: back to default filtering

## TODOS

- [x] Refactor astro-pics to as few GET requests as possible
- [x] Rename astro-pics service to DataService
- [ ] File cleanup -> all files/stylesheets
- [ ] Dynamic Tooltip on the filter btn (filtered/default state messages)
- [ ] Write tests
- [ ] Turn Material Breakpoint Service (the class with the object) into a general class
- [ ] Turn Material Breakpoint Directive/Service into reusable -> general & library  

Finished making the new service and hooking all of the routes up to it.
I need to go back in and clean up all of the components, resolvers, etc. that have references to astro-pics service, and remove the file.
There is a copy of the previous version in "click-handler-code" directory.
