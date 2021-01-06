# Request more images when the end is reached

I'm going to look at what this would entail, and how difficult it might be to have another request be sent when the end of the array is reached.  

Considerations:

- I don't want the current images on the screen to go away. This state needs to be maintained
- It's okay if the loader appears over the full screen, as long as the images that have previously been rendered are still rendered when the new request is done loading
- The user should be able to click the button 24 more times, and get 24 more images on the screen. There won't be a limit to how many times this can happen, at least initially.
