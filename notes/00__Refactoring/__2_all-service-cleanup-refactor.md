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
