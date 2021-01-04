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

### Removing the first item from an array

```js
// Array.shift() removes the first item
var nums = [1,2,3,4,5];
nums.shift();
console.log(nums) // -> returns [2,3,4,5]

// NOTE
// if you do this:
var nums = [1,2,3,4,5];
var nums2 = nums.shift();
console.log(nums2); // -> this returns 1
```

## Another Method

This might be a nicer method that doesn't involve continually mutating the array.
Have a class property that is equal to the current index.
So default value is 0, and the first button click returns the 0 index.  

On click, it will display the image at `Array[index]`.
Also on click, the value of the index property will increase by 1, thus moving to the next instance in the array.

This will need to check the array to make sure that the index exists that it is trying to get.
It it doesn't exist, and the user is at the end of the array, then display the message to reload.  

Instead of reloading also, there could be a button that will say 'get more' or something.
