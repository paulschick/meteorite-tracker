# Reviewing My Meeting with Jay

We went through the project for a few hours. I got some great notes on what to improve.  

## TODO

- [x] Filter meteorites header removal - redundant headings
- [ ] Create meteorite sort functionality (show, filter, sort)
- [ ] Delegate filtering and sorting logic to services (filter.service.ts, sort.service.ts)
- [ ] Astro-pics should be 12 images not 10 - breakpoints divide into 12 better than 10
- [ ] Random image detail page should be a unique route - not the route from astro-pics
- [ ] Back button from random image detail should go back to random image view

## Progress

### Filter Meteorites Heading Removal

- `MeteoriteContainerComponent` has the headings
- Removed the heading, changed text of main meteorite heading, removed corresponding styling
