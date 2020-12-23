# Client-Side Caching with Interceptors

I'd like to implement using an interceptor.
Seems that a useful way to do that would be to use an interceptor to handle client-side caching.
Client-side caching allows for data to be served without a call needing to be made to the server until that cache is invalidated.  

By using an interceptor, the code used to make the requests (currently only get, but will add more) can continue to do so.
All of the work related to caching is delegated to the interceptor.  

For a simple cache, the cache is invalidated when any request other than a get request is made.
So here, this will allow for the cache to remain for a while.  

However, the Astronomy Picture of the Day is changed daily. I wonder if this automatically make a request when the application is loaded?
In other words, does the cache store on my local storage indefinitely?
I tend to think not, but I'll just have to test it out.
