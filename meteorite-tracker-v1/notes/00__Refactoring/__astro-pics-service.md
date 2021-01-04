# Refactoring the Service

I can make an API call to NASA regarding the APOD images that will return an array of objects within a date range, or a certain number of random images.
I'm a little upset that I spent so much time creating a service that makes 10 requests, but this is a much better way to do it.  

Also, I'll make a service to get an Earth pic (EPIC API) to use on the home page instead of a APOD.
Then, I'll have another little function where you click a button to get a random image from the NASA API.
So you can just sit there and keep clicking.
Plus, this demonstrates a service in response to a DOM event, which is good to show.  

- Add in the function to return pics from date range.
- Integrate this with the template
- Phase out the old method and remove
- Move the service into the core folder
- Create service for EPIC earth pic
  - This only has to be static -> same image everytime
- Replace apd service with EPIC and add into the home page.
- Then create module for the random image generator page
- Create the method in the shared astro-pics service in the core module
- Create the components and the page and hook it up, add it into the sidenav.

## Making the Method

- Define a basic method
- Add a call to it in ngOnInit in the astronomy-pics-list component so I can console log it  

[Github Repo with more info](https://github.com/nasa/apod-api)  

### Date Range

- pass in `start_date` without `end_date` -> defaults to current date (that's what I want)
- So get 10 days before today, set that as start_date, don't pass in end date
- Iterate through the returned array of objects and push it to the template  

Full URL with the start_date as 2020-12-10:  

<https://api.nasa.gov/planetary/apod?api_key=wj7jAdpeOnwUhXeUR40W9Ll02P7hiJ2N0j5Rv0uY&start_date=2020-12-10>  

And this returns the response as expected.
So the only real thing here is just to calcualte the correct start dat

### Important Fix

So I can now refactor my services to fit this.
Instead of doing that thing where I'm pushing everything to an array in the service instead of just doing it in the subscribe, I can do the following.  

All I was missing was adding types to different options inside of the subscribe method.

```ts
let getFromRange = this.astroPicsService.getFromDateRange().subscribe(
  (data: IApd[]) => this.newAstroPics = data,
  (err: NasaError) => console.log(err),
  () => console.log('finished')
);
```

This is big!!

Okay and this works perfectly to replace all of the code that I had before for making 10 HTTP requests.
All I have left is to get the correct range of dates programatically.
Can probably copy some of the code that was used in the prior func.

### Finish and Cleanup

Alright perfect.
So this works as expected.
Now I need to clean up that service, a lot, and move it into the core module afterwards.
I'm not even going to save the prior code, it's very messy.  

Commented out everything that is not needed and tested all of the pages and event methods.
Committing and merging then fully cleaning.  

I'm going to copy where it is right now, before merging, and I'll push the copy so that it exists as a branch and this stuff won't be lost if it's needed.
