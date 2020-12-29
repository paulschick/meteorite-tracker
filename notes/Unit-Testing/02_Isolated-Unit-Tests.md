# Section 03 - Isolated Unit Tests

- [Section 03 - Isolated Unit Tests](#section-03---isolated-unit-tests)
  - [Testing a Pipe](#testing-a-pipe)
    - [Pipe Idea](#pipe-idea)
    - [Testing format-mass.pipe.ts](#testing-format-masspipets)
  - [Testing a Service](#testing-a-service)
    - [Demo Test](#demo-test)
  - [Testing a Component](#testing-a-component)

## Testing a Pipe

*Either just take notes, or follow in the course repo*.  

We'll do pipe, service, component, then mocking and interaction testing.
So I'll be able to apply this to here soon enough.  

### Pipe Idea

I actually do need a custom pipe to format the meteorite mass from grams to kilograms.
This could actually be a quick build, and then I can test it.

Okay, so I created format-mass.pipe.ts, and it works in the template.
This formats the meteorite masses from grams to kilograms.
Now I can follow the course and run the unit test on my own custom pipe.  

When running a component through a test, for example, it is just testing the class.
So it will ignore the decorators and other Angular-specific things.  

A pipe just transforms a value.
So we test it as a class that takes in a value and returns a string.  

### Testing format-mass.pipe.ts

- takes in a value, converts to number and transforms, and returns a string with the unit 'Kg' attached to the end.
- In the same dir, creating format-mass.pipe.spec.ts
- Arrange -> constructing a pipe
- Act -> can go in the expect statement
- Assert -> also in the expect statement  

So here is the test, and this passes the test:

```ts
import { FormatMassPipe } from "./format-mass.pipe";

describe('FormatMassPipe', () => {
  it('should display 5.00Kg if mass is 5000', () => {
    // construct a new FormatMassPipe
    let pipe = new FormatMassPipe();

    expect(pipe.transform('5000')).toEqual('5.00Kg');
  })
})
```

I'd like to add more cases.
Like when I pass in the number `5000`, when I pass in 0, when I pass in a word, etc.
I'm pretty sure it would fail if I pass in a word, but I should test for that too!.  

So, I have 10 tests for the format-mass pipe.
Running and developing the tests forced me to optimize the pipe for all different scenarios.
This is pretty awesome, this pipe is way more robust, and deals with grams, kilograms, tons, and values that are not valid.  

Here's the Pipe:

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatMass' })
export class FormatMassPipe implements PipeTransform {
  transform(value: any): any {
    switch(true) {
      case +value === 0:
        return 0;
        break;
      case !value || isNaN(+value):
        return 'No Mass';
        break;
      case +value < 1000:
        return value.toFixed(2) + 'g'
      case +value < 1000000:
        return (+value/(1000)).toFixed(2) + 'Kg';
        break;
      case + value >= 1000000:
        return (+value/(1000000)).toFixed(2) + ' Metric Tons';
      default:
        return value;
    }
  }
}
```

Heres the test:

```ts
import { FormatMassPipe } from "./format-mass.pipe";

describe('FormatMassPipe', () => {
  it("should display 5.00Kg if mass is '5000'", () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('5000')).toEqual('5.00Kg');
  })

  it('should display 5.00kg if mass is 5000', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(5000)).toEqual('5.00Kg');
  })

  it('should display 0 if mass is 0', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(0)).toEqual(0);
  })

  it("should display 0 if mass is ''", () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('')).toEqual(0);
  })

  it('should display No Mass if mass is hello', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('hello')).toEqual('No Mass');
  })

  it("should display No Mass is mass is '2020/12/23'", () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('2020/12/23')).toEqual('No Mass');
  })

  it('should display 500.00g if mass is 500', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(500)).toEqual('500.00g');
  })

  it('should display 0.12g if mass is 0.12', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(0.12)).toEqual('0.12g');
  })

  it('should display 1.00 Metric Tons if mass is 1000000', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(1000000)).toEqual('1.00 Metric Tons');
  })

  it('should display 2.34 Metric Tons if mass is 2340000', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(2340000)).toEqual('2.34 Metric Tons');
  })
})
```

## Testing a Service

So I'm going to test the Astronomy-pics module service first.
This is a complicated service, so it may be tough, but to get through the lesson that's what I'll do.  

Actually, this has dependencies, so I'm going to wait to learn about mocking.
I'll follow along and then test a component when he gets to that.  

### Demo Test

This one is simple, it has no dependencies so he doesn't have to worry about a constructor method (like all of mine have with Http requests.).
The test in the example doesn't explicitly hve an arrange.
So he moves the init from the beforeEach and into the tests.  

So it looks just as simple to test a service with no dependencies.
I need to know how to do it with dependencies, since that's the majority of the services that are going to run into problems in production...  

## Testing a Component

Demo  

Has one dependency, and has some methods including an OnInit.
He's just testing the delete method.
So you can actually isolate methods.  

The class here has a property that is an array.
So to test, you would need some data to work with in the test, in this case an array.
Especially if you're going to delete data.  

Do I have anything similar?  

meteorite-detail -> takes in meteorites, but the functionality is through the template.
So I would need to do integrated testing for this component.  

His component uses a service in the constructor, and then it has the heroes array, where the response of the get request is stored. This is some functionality that I definitely use, although I don't have the delete method in any of my methods.
