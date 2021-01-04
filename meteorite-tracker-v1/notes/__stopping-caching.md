<https://medium.com/mikes-fullstack-ladder/how-to-skip-http-interceptor-dee136e54a5f>  

<https://www.reddit.com/r/Angular2/comments/7hjysk/quick_question_interceptor_is_it_possible_to/>  

Here, it's saying that you can maintain a list of addresses that you don't want to modify.
For this app, that would be the random image url.
Just need to check for that before cloning the request object.

# Method

I'm going to use an if statement to just check to see if the url contains `&count=1`, which is the param used to get a random image.
Using Javascript `string.search()` will return the index of the string if it exists, and if it doesn't it returns -1.  

So as long as the expression returns -1, I do not want to cache it.  

I might need to do this in the cache service instead of in the interceptor.  

## Other Thoughts

Working directly in the caching service isn't working the way I've been trying to do it.
The page is actually caching the request once it loads, so it's not even waiting for the button to be pressed.  

So, I can go about this in a few different ways:

- Modify the interceptor correctly to operate based on headings.
  - I would either need to add headers to the requests manually, or I would need another interceptor to add headers to certain requests
  - The caching interceptor would only cache requests that are GET requests with specific Headers.
  - The random image one would obviously have a different header, or none, and not be cached  

I think that's probably the way to do it.
But, if I disable the interceptor, do I still have the same problem?
I should figure this out first.
So I'll branch off and try to break it a bit.  

## Forget All of This

Caching isn't the problem.
I disconnected the interceptor, and it just made the Astronomy Images page slower when navigating back to it.
The random image component still has the same problem, so it is at the very least not just caching.  

I think that it's something else.
The service is not getting a new picture and pushing it into the array.
It's just continuing to push the same image into the array over and over again, that is the problem.  

Now, I know that this comes in as a cached response when the component loads.
I need to do something with either the service or the component function (which I should probably make a new service for anyway).

I think my direction is fundamentally incorrect right now.
Although the way that the page component is dealing with the data should be fine, the functionality is now different.
The function of the original setup was just to display the same thing over and over again, and this works.
I now need the button click to result in a unique http call on each click.
This then needs to be pushed to the array in the parent, and the latest addition should be displayed on the dom.  

So, I'll have to get another way around this problem.  

Basically start from the beginning on this.  

In a new branch, I'm going to clear out the old logic and pretty much just start over there.
