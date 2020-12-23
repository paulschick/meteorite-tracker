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

## Setup

In the 'booktracker' project, the CacheInterceptor is imported into the core module.

```ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './cache.interceptor';

// ...
// In providers array
{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
```

- This is not imported into any other module
- Doesn't look like you have to directly implement it in any other files  

I think the code within the Interceptor determines how it is used.
It's declared in the core module as a provider, so it should be available throughout the application.  

Oh wait...  

There is a http-cache.service.ts & there is a cache.interceptor.ts  
The service is in app/services/http-cache.service and the other is in app/core/cache.interceptor.ts.  

So the *service* stores the cached HTTP requests and the *interceptor* does the caching.

## 01 Caching

Step 1: create services folder in app/services, create file http-cache.service.ts

- Created this file. I would like to go over what's happening in the file.  

### http-cache.service.ts

The private property *requests* is an object created to store the cached requests. That's why it's initialized with an empty object.  

The different methods are used to interact with the cache.  

**put** -> Adds to the cache, url used as property name, added to response cache object  
**get** -> get items from the cache. Takes url as param, returns either HTTP response object if something was found, or undefined if nothing was cached for that url.  

the next methods are used to invalidate items in the cash.
When something is added to the server, modified, or deleted, the cache becomes invalid. That's the concept here.
So, these are custom methods

**invalidateUrl** -> Created to allow for removal of a single item from the cache  
**invalidateCache** -> Invalidate the entire cache with one method call.  

### cache.interceptor.ts  

In core folder, create cache.interceptor.ts

- Need some Http packages, rxjs, and HttpCacheService that was created previously.
- HttpCacheService is injected in the constructor to use it in this class.  

If the request is anything other than a GET, then the interceptor will ignore it, and pass it along to the `next`.
It will go to the handle method.  

So first method, pass along non-cacheable requests:

- Interceptor finds a request that is `!=='GET'`
- log to console
- call the invalidateCache method from http-cache.service.ts
- pass it on to the handle method: `return next.handle(req)`  

The first method therefore does two distinct things:

1. Pass along non-cacheable requests
2. Invalidate the cache  

So, this if statement only executes if it is not a GET request.
If the request makes it passed that validation check, then we know that we're dealing with a GET request.
The first thing we need to do after that is retrieved any cached response associated with the url.

- create variable cachedResponse of type `HttpResponse<any>`
- set that equal to the instance of the cacheService.get method for the url in that request  

If a valid response is retrieved, log the cached response and return the cachedResponse.  

***Return cachedResponse as an Observable***  

How?
By wrapping it in the rxjs `of` method.  

IF we did not get a valid response, we need to send the request to the server and get the response from there.

- use next.handle(req) for the response to be passed to this method
- use rxjs pipe method to chain on rxjs operations to the observable
- use tap to get access to the observable
- pass into an if statement
  - if the response is an instance of HttpResponse, then log to console and add the response to the cache with the cacheService's put method
