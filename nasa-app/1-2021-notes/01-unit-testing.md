# Unit Testing Simple Services

I have a few services that are very simple, they take in no dependencies.
This is a good place to work on some course material, as I need to keep doing that as well.
Going to run through some unit tests, my goal is to write unit tests for:

- material-breakpoints service
- evaluate-breakpoints service
- click-handler service (test driven development, currently unfinished)  

## MaterialBreakpointsService

All this service does is inject an object instance through its class.
I put it in a service to reduce the amount of code used so that it can be accessed through the constructor.  

Successfully wrote a test for this.
One of them got the keys, and ran a find method to get the key for value=6.
Also summed the values of the object with a `reduce` function and checked the total.  

The benefit of this is if the Object is changed, the test will fail.
So this would have to be done intentionally, and the test would need to be altered to pass with the current values.  

I will need to learn more to test `EvaluateBreakpointsService`, as this subscribes to an Observable.
This is probably not too difficult, just create an Observable in the test using something like `of` to do so.

### APD Component

Check that the image element is binding the url to the source property.
Well this uses activated route, and apparently this is another thing that has to be accounted for.  

### Astronomy Pic Detail

This just has an input property. So this can definitely be tested a lot easier than the APD component.  

Test was written in the same manner as it was presented in the course lesson. This worked well, shallow integration test for the component and the template.  

Looked at the input property, and made sure that this was interpolated to the correct element, in the correct way in its template.
I should build and run this same test for any components that are doing a function as simple as this.
