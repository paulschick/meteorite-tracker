# Moving Forward

I'd like to have something nice for a demonstration. Here are some topics that will be covered that should be included insofar as they can be and it makes sense:

- Securing Angular Apps with OpenID Connect
- RxJS (more stuff)
- Angular Material (currently Boostrap, perhaps do this in another application)  

Alternatively, maybe I have a few more views with this, add in routing, and add in sorting and filtering.  

So, if you filter the page, would this go to a filtered view? Or just modify the page?  

It might be worth just making a detail page, and I could also have comments. Hard-coded, and allow you to just add some.  

I've been putting the filtering logic on the meteorite-detail component. It's acting strangely.
Only the first shows up, but when the button is pressed, the next appears.
You have to keep clicking to get more.  

I don't think this logic works one-to-one with the Event/Session application.
My thought is that this filtering needs to take place in the meteorite-list component, where all of the meteorites are coming in from the API service.
The meteorite-detail component only serves to handle and style individual meteorites.  

In the event/session application, the event-details component handles most of it. But, that one event has with it an array of session objects that can be sorted and filtered.
The session-list component handles that logic, but again, that handles the entire array.  

This logic either needs to be moved to the meteorite-list component, or to a separate component.
Potentially the logic could be moved to the meteorite service.
I will have to spend some time going through the course application, and consider exactly what it is that I have to do.
