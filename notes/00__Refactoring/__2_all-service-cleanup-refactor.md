# Clean It All Up

Alright, so what I just did in astro-pics service, I need to do to all three current services.
I will need to change the methods so that they are handled in this way, and so that they are not doing weird things like pushing to arrays when they can just be set within the subscribe.
This isn't that difficult.

- astro-pics service done  

astronomy-pics-list.component  

Besides just cleaning up, need to end the subscribe. I think the completed part of the subscribe does this.

- this component is done too.
- astronomy-pic-detail is done too
  - Still have to push to array to be able to use ngFor, but have a good workaround
  - Set to `IApd` instead of `IApd[]` in the service call.  

Alright, so this module is fully cleaned up and refactored.
Before merging, I'm going to move the astro-pics service to the core module.

## Home Module

Okay, so now to refactor that main image and stuff.
All of the code looks pretty good over here, I'm not worried about it.
I should be able to use the apd resolver for the new implementation just the same.
In fact, I might just be able to add the random url and then just change the heading make it easy.

Done, just changed it to a featured image.
Resolver works the same, but in the component just set the component property equal to the 0 index of the returned Observable.

## More Content

So when you get to the website, you don't really know what's going on.
It would be good to have some written content that just tells you about the site and how to use it.  

Like the heading "Astronomy Images" doesn't tell you much of anything.
It would be good to have a paragraph that says that these are 10 images, each being the featured image of that day.
Why only one per day? Well that's because of how Nasa's API works, and why not have something to say about that?  

### Layout

And on the Astronomy-pic detail pages, some more space in there would be good.
For one, wouldn't be bad to further control the size of that image.
I don't think it needs to take up the whole screen.
Also, the heading is too close to the image.
