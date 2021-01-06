# Simple Unit Testing

## [Service Testing From this Article](https://blog.knoldus.com/unit-testing-of-angular-service-with-httpclient/)

Trying it out now. I had to make the `fullEndpoint` a public property to be able to access it from the test, which is fine.  

Returning this issue with the test:  
NullInjectorError: R3InjectorError[CompilerModule](HttpTestingController -> HttpTestingController):
  NullInjectorError: No provider for HttpTestingController!

- Cannot read property 'expectOne' of undefined
- Cannot read property 'verify' of undefined

### [Github Issue with Same Problem](https://github.com/angular/angular/issues/18499)

Okay, so all I had to do was replace `HttpClientModule` being imported with `HttpClientTestingModule`.
Pretty cool, this checks for a few things:

- that the request is a GET request
- That it's getting the provided dummy data, and the length is what is expected, which is passed in as an argument to the get method.  

So now that I am able to successfully test this service, I should be able to replicate this with `AstroPicsService` and `HomeService` as well, at the least.  

Although there is a resolver between those services and their components, I can still test the services themselves in this same way.

## AstroPicsService

I've refactored this service, and now it can be tested just like the previous one.
Difference here is that there are two GET methods in the service.  

`getFromDateRange()` unit test built and is passing.  
`getDetailImage()` unit test built and passing.
