# Astronomy Pic of The Day Service

- [Astronomy Pic of The Day Service](#astronomy-pic-of-the-day-service)
  - [Scaffolding](#scaffolding)
    - [NOTE ON SERVICES SCAFFOLDING](#note-on-services-scaffolding)

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
