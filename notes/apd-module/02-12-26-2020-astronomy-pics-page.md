# Building Out the Astronomy Pics Page

Everything will funnel out through the astronomy-pics.page.ts file.
This is already loaded in the appropriate modules.
All newly created components will need to be registered with the astronomy-pics module.  

## Components

- astronomy-pics-list.component.ts
- astronomy-pics-thumbnail.component.ts
- (later: astronomy-pics-detail.component.ts -> will require parameterized routes /:id)  

## AstronomyPicsList Component

Currently has its selector in the Astronomy Pics page.
Added an h2 for now.  

Really first, I want to put some dummy data in this component, and use that to build out the thumbnails.
I'll grab data from the actual API, just copy today's json.  

- currently have dummy data in component  

So, the service will handle the url logic to make the array of objects of images and their metadata.
The component will handle the rest of the logic.
So, the way that the dummy data is stored in the component is how it will be received when it comes down from the service.  

Now I can get the UI built out how I want it before going to the service.
This will direct how I want the service to be built out.  

The only import property that *should* be needed in the thumbnail component is the "object" identifier.
So in this case, I'll make is `ap` for astronomy pics.

- Got the ngFor hooked up with the title displaying for the astronomy-pic-thum and list components
