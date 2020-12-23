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
