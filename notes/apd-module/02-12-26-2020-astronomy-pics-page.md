# Building Out the Astronomy Pics Page

Everything will funnel out through the astronomy-pics.page.ts file.
This is already loaded in the appropriate modules.
All newly created components will need to be registered with the astronomy-pics module.

- [Building Out the Astronomy Pics Page](#building-out-the-astronomy-pics-page)
  - [Components](#components)
  - [AstronomyPicsList Component and Thumb Component](#astronomypicslist-component-and-thumb-component)
    - [API Notes](#api-notes)

## Components

- astronomy-pics-list.component.ts
- astronomy-pics-thumbnail.component.ts
- (later: astronomy-pics-detail.component.ts -> will require parameterized routes /:id)  

## AstronomyPicsList Component and Thumb Component

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
- Images displaying through interpolation
  - Will be switched to property binding when the service is serving the data
  - Can have the service grab static data, and then put it as an API if I want to, probably don't need to  

Okay, so the next thing should be to add some styling.  

I want to do minimal styling right now. The point is to get all of the logic in place, and finish it all off with styling.
I'd like to focus on one type of task at a time insofar as bad styling doesn't take away from my ability to develop the applicaiton.  

Next, do I do the detail view, or do I build out the API?
I think I build out the API.  

### API Notes

03-12-26-2020-astro-pic-service.md  

NOTE this will not have a resolver right now.
Resolver may be added in the future if there is time.
Would like to get function, and GOOD styling.  

I would rank skillful styling (which will take time!) over spending time implementing a resolver, when I already have one hooked up to demonstrate the concept.
