# Section 03 - Isolated Unit Tests

- [Section 03 - Isolated Unit Tests](#section-03---isolated-unit-tests)
  - [Testing a Pipe](#testing-a-pipe)
    - [Pipe Idea](#pipe-idea)
    - [Testing format-mass.pipe.ts](#testing-format-masspipets)

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
