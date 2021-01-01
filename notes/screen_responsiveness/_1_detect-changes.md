# Detecting Screen Size and Resize

[Source 01](https://www.itsolutionstuff.com/post/how-to-get-width-and-height-of-screen-in-angularexample.html)  

## First Solution

- `ngOnInit()` -> `window.innerWidth` and `window.innerHeight`  

```ts
export class Example {

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
```

## Second Solution -> Detect on Resize

- `@HostListener` -> listen for `window:resize` and `$event`
- Create method `onResize` that takes in the event from the `@HostListener`

```ts
export class Example {

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
```

Okay, so these both will return a value that I can compare to breakpoints.
So there's the first part of the functionality.
Getting the breakpoints and comparing them isn't the hard part.
Will this always watch, and will it notify a method of the change and re-evaluate?  
