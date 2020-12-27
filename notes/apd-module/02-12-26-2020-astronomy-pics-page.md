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
