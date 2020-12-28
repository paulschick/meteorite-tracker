# Problem with Astronomy Pics

I know see the problem.
Every time you navigate back to the Astronomy-pics view, the application makes another request to the API.
Instead of either replacing the images already there, or just using the cached resources, it just adds another 10 to the UI.
So you'll have 10 images the first time, 20 the second time, 30 next, and so on.
This must be an issue with the service.  

I need it to clear out the prior array before adding more to it.
I truly don't know how to fix this, I'll have to work with it.

## Solution

Trying an if statement where data is being pushed to arrays.
Make sure that it doesn't get larger than 10 items.  

Alright, very lucky, that fixed it.
Heres the code with the solution added:

```ts
getDates = function() {
  for (let i=0;i<this.daysPrior;i++) {
    let myDate = new Date(Date.now() - (i+1) * 24 * 60 * 60 * 1000)
    let myDateStr = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`
    if (this.datesArray.length < 10) {
      this.datesArray.push(myDateStr)
    }
  }
  return this.datesArray
}
```

Commit log:  

problem: astronomy-pics would load another 10 images every time you navigate back to the page  
>> Solution: added an if statement to check the length of the dates array. Only add a date if the length is less than 10  
>> Explanation: because the application wasn't re-compiling, the datesArray was not reset, instead, it continued to store the dates that were pushed to it.  
>> Everytime the astronomy-pics page was navigated to, the ngOnInit function ran again, executing this code, and pushing another 10 dates to the array. This triggered the service to make 10, 20, 30 API calls.  
