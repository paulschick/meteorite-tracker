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

### Astronomy Pic Thumbnail

So this is similar to APD component, except there is no route resolver.
This just takes in an input property.
It will be good to figure out how to check the src content of the image in the DOM, and will also need to select Material DOM elements.
Thus, this would check for using Material.  

If I want it to be independent of Material, I need to select by something other than those elements.
There is only one image tag in the whole template, so I can just test for the image.
This is only supposed to have one image per output, so this holds.

## Components with Pipes

Meteorite-Detail Component uses a pipe.
So in order to test anything with integration with the template, there needs to be a pipe mocked.  

[Some answers here](https://stackoverflow.com/questions/39293258/how-to-mock-pipe-when-testing-component/45081671) might be a help.
