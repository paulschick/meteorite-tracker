# First Unit Test Example

This unit test is always true essentially.
The point is just to see the structure of how a unit test is written.

```ts
describe('my first test', () => {
  // means System Under Test
  let sut;

  beforeEach(() => {
    // empty object so that always reset back to this initial state for next test
    // code in before each should reset state, so that future tests are not polluted
    sut = {}
  })

  // start 'it' statements with 'should'
  it('should be true if true', () => {
    // this is where test is written
    // the 'arrange' part of AAA structure
    sut.a = false;

    // act
    sut.a = true;

    // assert
    // toBe -> matcher method
    expect(sut.a).toBe(true);
  })
})

// the two strings should make sense when appended
// these strings become: 'my first test should be true if true'
```
