# Astronomy Pic of The Day Service

- [Astronomy Pic of The Day Service](#astronomy-pic-of-the-day-service)
  - [Scaffolding](#scaffolding)
    - [NOTE ON SERVICES SCAFFOLDING](#note-on-services-scaffolding)
  - [Developing the API Queries](#developing-the-api-queries)

## Scaffolding

- in modules/astronomy-pics/services
- imported to astronomy-pics module  

### NOTE ON SERVICES SCAFFOLDING

In home module, create services folder to move all of that extra service and resolvers into

- Created astro-pics.service.ts
- Added service to providers array of astronomy-pics.module.ts  

Url design example:  
<https://api.nasa.gov/planetary/apod?api_key=wj7jAdpeOnwUhXeUR40W9Ll02P7hiJ2N0j5Rv0uY&date=2020-12-01>  

Service is now working with subscription.
Works for one URL.  

Next step is to have a loop in the service to continute to fetch images until there are 10, and change the date each time.  

This is going to be a bit complex  

## Developing the API Queries

so, I think the function to construct the urls will be outside of the request itself.
I will have a function that will build 10 separate endpoint urls, and then the get requests will iterate through this array and return the observable.  

So the function will look at the current day, and return 10 days from now to back 10 days.
Then, it will concat each of these onto the url and have an array of strings of 10 different urls.
Then the request will iterate through.  

Probably the most straightforward way to do it.

Make request without date being added first, this gets todays date.
Then, get the date from the url, and then we'll subtract from that.  

objectName.date  
then convert to date, and there should be an operation to subtract from that.
