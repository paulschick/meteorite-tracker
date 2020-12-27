# 12-26-2020-development Branch

Currently working on creating a new apd module.
At this point, I plan to create another module that will have another data service to the Nasa API.

- Lazy loading module
- view is `/pic-of-the-day`
  - Detail view at `/pic-of-the-day/:id`
- Must programmatically add date to the end of the url, with the API key to generate the proper images, save to array of objects
- Then will have detail view  

So two pages in this module

- pic of the day
- pic of the day detail  

Module name: `astronomy-pics.module.ts` and export as `AstronomyPicsModule`

- Removed home module and shared module from app.module.ts
  - No need for these to be imported here, only need to be declared in the app-routing.module, same with the new module  

Disregard, needs to be in a module.
Particularly, needs to be imported into app module because it is the root.
Shared Module also needs to be there because Material is shared.  

However, I'll try moving one and then the other to the core module.
Remember, that is the new root.
Also, will try and put Home Service in the Home Module instead of Core Module  

Home module is fine in core module  
Home service is fine in Home Module  

So, I'll leave it as is.
The feature module needs to be imported into Core Module, and the component that is loaded in the route is imported into app-routing module (not the module itself, except figure it out with the lazy-loading.)
Module-specific services, while provided for root, can just be imported to their module.
At least for HomeModule, since it's the root and goes into CoreModule, which is kind of the root module...  

I guess that's why it can be imported into its own module.  

## On Lazy-Loading

So in order to lazy load the feature module, there needs to be another routing module.
So, I'll have astronomy-pics module, and astronomy-pics-routing module as well.
astronomy-pics module (NOT routing) will be called with the loadChildren in app-routing module, and will be imported to core module.
In the astronomy-pics-routing module, that will import the component to load, and call the routes `forChild` for this new view.  

AH, so we don't need to call the astronomy-pics module in core module.
That's the point of lazy loading.
We load that module when that route is activated.
Then it goes into that module.  

So, I'll have to load the shared module and stuff there as well.
AND you don't import the lazy-loaded module in the app-routing module

```ps1
ng g m modules/astronomy-pics --routing
```

Then create page component in modules/astronomy-pics/pages/astronomy-pics.page.ts  

I got the astronomy pics lazy-loading module to work.
I was having a problem with BrowserModule being imported twice.
BrowserAnimations Module was in App and Shared module.
It didn't work with those just in AppModule, but when I put the two only in CoreModule, it works, and the lazy-loading also works.
