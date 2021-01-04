# Getting Multiple Random Images

This new branch is going to be a clean slate on these components.
I spent the time to get the grid columns, and that works great.
Now I need the template to display a unique, random image each time the button is pressed.
The way that this is to be done is different from the original intended function of the code that I looked at.  

**Rule Out** the caching. This isn't the problem.
This is all components and services here.
Might need to do another service, which is fine, and maybe another directive to handle this.
Could result in more reusable code, which is great.

## Iterating Through an Array of Multiple Objects

So I decided to just change `&count=1` to `&count=50`.
This number can be changed, but it's an easy fix.
If the user reaches the end, they'll be prompted to refresh.
It's what it is.

### First Iteration Idea

So, I need to display the next image in the array each time the button is pressed.
Instead of doing a for loop, maybe I could just always use the 0 index.  

To do this, first a copy is made of the array (I did that).
Then, when the button is pressed, the object at the 0 index is displayed.
Once displayed, this object will be removed from the index.
Now each press of the button will just use the 0 index again, and that object will be removed after it's displayed.  

So, this also makes the reload prompt easier too, because once the array is empty, this can trigger the action to make that notification happen.
