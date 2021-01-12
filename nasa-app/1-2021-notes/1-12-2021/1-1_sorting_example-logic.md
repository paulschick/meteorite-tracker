# Sorting Functionality

This has been solved, here is the pre-work:

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

This was improved to use arrow functions and ternary operators for altering the copy data used to display meteorites in the application:

```ts
sortMeteorites(sort:string):void {
  this.sort = sort;
  if (this.sort === 'massDesc') {
    this.visibleMeteorites = this.visibleMeteorites.sort((a,b) => +b.mass - +a.mass)
  } else {
    this.visibleMeteorites = this.visibleMeteorites.sort((a,b) => {
      return (a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
    });
  }
}
```
