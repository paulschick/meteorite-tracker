# Reviewing My Meeting with Jay

We went through the project for a few hours. I got some great notes on what to improve.  

## TODO

- [x] Filter meteorites header removal - redundant headings
- [ ] Create meteorite sort functionality (show, filter, sort)
- [ ] Delegate filtering and sorting logic to services (filter.service.ts, sort.service.ts)
- [ ] Astro-pics should be 12 images not 10 - breakpoints divide into 12 better than 10
- [ ] Random image detail page should be a unique route - not the route from astro-pics
- [ ] Back button from random image detail should go back to random image view

## Sort Functionality

I made this in repl.it, this works as needed:

```js
let meteoriteArray = [
  {
    name: 'm1',
    mass: '100',
    id: '1'
  },
  {
    name: 'm2',
    mass: '150',
    id: '2'
  },
  {
    name: 'm3',
    mass: '89',
    id: '3'
  },
  {
    name: 'm4',
    mass: '352',
    id: '4'
  },
]

const sortMeteoritesMassDesc = function(meteorites) {
  return meteorites.sort((a,b) => b.mass - a.mass);
}

const sortMeteoritesMassAsc = function(meteorites) {
  return meteorites.sort((a,b) => a.mass - b.mass);
}

console.log(sortMeteoritesMassDesc(meteoriteArray));
console.log(sortMeteoritesMassAsc(meteoriteArray));
```

So just add return types to each of these, return type should be `IMeteorite[]` for either sorting function.

- Add these into the same component that has filtering
- Then, we'll send this out to a service
  - Once in service, I can have the buttons actually in the parent component  

### EventBus Component

As an example of an event but, I should do this just for the sorting functionality.
I can add filtering to it, but the reason for doing just the one there is to demonstrate the creation of an event bus?
