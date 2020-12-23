# Building Out the Nasa API

We can get this to go further. In fact, Nasa has some pretty awesome endpoints, like the Astronomy Picture of the Day.
That would make a great cover image for the website.  

Additionally, these endpoints have custom API parameters, so I can really apply some of the Http request stuff that I've been learning.  

I signed up with my personal email.  

API Key:  
wj7jAdpeOnwUhXeUR40W9Ll02P7hiJ2N0j5Rv0uY  

Pass in the key to the url to make a request, like this:  
<https://api.nasa.gov/planetary/apod?api_key=wj7jAdpeOnwUhXeUR40W9Ll02P7hiJ2N0j5Rv0uY>  

And this looks like the picture of the day.  
Anyone can register for one of these keys, and now they have my info :)

## BIG NOTE

My api key is in a config file, *which I am pushing to GitHub so that I can get it*.
The repo is private, if it is to be published for production, or made public, this needs to be put in a file with a new name that is added to the gitignore.

## Exploring the API and Usage

### Astronomy Picture of the Day

Endpoint:  
<https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY>  
Usage: simply replace DEMO_KEY with my key  

Just import the variable with the key to the file, and concatenate it to the endpoint (just use template strings)  

So for this, I want to have this display on a home page. Which means, the meteorites might be moved to a feature module, or at least act as a feature.  

So home page component. Will also have picture of the day service. star-image.service.ts?
