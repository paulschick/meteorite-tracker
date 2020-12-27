# 12-27

- [12-27](#12-27)
  - [concatMap](#concatmap)
    - [Service Implementation of concatMap](#service-implementation-of-concatmap)
    - [Component Example Implementation of Subscribing and Displaying](#component-example-implementation-of-subscribing-and-displaying)
  - [The easy part, creating the date strings](#the-easy-part-creating-the-date-strings)
    - [10 Days Prior to Array](#10-days-prior-to-array)
    - [Formatting the dates](#formatting-the-dates)
    - [Formatting the Entire Array](#formatting-the-entire-array)
  - [Video on RxJS](#video-on-rxjs)
    - [Hot v Cold Observables](#hot-v-cold-observables)
    - [Subjects](#subjects)
    - [Behavior Subject](#behavior-subject)
    - [Operators](#operators)
  - [Moving Forward](#moving-forward)

Currently going through the RxJS Pluralsight course to work with observables.
I'm working with a few ways to handle the Http response.
Nothing totally notable yet.  

Just to save this progress, I can take the single object from the http request, push it onto an empty array, then console log from the subscribe with this:  

astro-pics.service

```ts
astroPics = this.http.get<any[]>(`${this.astroPicsUrl}${this.key}${this.queryDate}${this.dynamicDate}`)
  .pipe(
    map(pics => this.astroPicArray.push(pics))
  );
```

astronomy-pics-list.component.ts

```ts
this.astroPicsService.astroPics.subscribe(console.log)
console.log(this.astroPicsService.astroPicArray)
```

I think the answer is .push after each request.  

This might work better if I make a class as a model for the API.
This way, I can actually cast the request to an instance of that class.
I actually don't even need to do that, there's already the apd model  

Something like the following is what should be used when the observable is actually an array of objects

```ts
astroPics = this.http.get<IApd[]>(`${this.astroPicsUrl}${this.key}${this.queryDate}${this.dynamicDate}`)
.pipe(
  map(pics =>
    pics.map(pic => ({
      ...pic
    }) as IApd)
  )
)
```

I'm really not sure what the issue is, but this isn't working yet. Just to return some data.  

I think I need to actually just have an array of objects.
Instead of fetching one single http response, I need an array like what I have as the JSON data.  

But again, I need to have 10 urls to make the request.  

1. manually make an array of 10 urls and figure out how to make calls to them, and get the observables to an array

## concatMap

This is a way to concat Observables.
Literally a way to asynchronously make get requests, and nest the observables  

Alright awesome, this is absolutely the answer.
I passed a string of id's into an observable function, used concatMap and it made all of the api calls.
Really awesome that this was exactly what I was looking for.
Shout out Pluralsight.

### Service Implementation of concatMap

astro-pics.service.ts

```ts
exampleConcatMap = of('2020-12-01', '2020-12-02', '2020-12-03', '2020-12-04')
  .pipe(
    tap(date => console.log('concatMap source Observable', date)),
    concatMap(date => this.http.get<IApd[]>(`${this.astroPicsUrl}${this.key}${this.queryDate}${date}`))
  );
```

### Component Example Implementation of Subscribing and Displaying

astronomy-pics-list.component.ts

```ts
this.astroPicsService.exampleConcatMap.subscribe(console.log)
```

## The easy part, creating the date strings

So truly this is the easy part.
It's just vanilla JavaScript.
Concepts:

- get current date
- subtract from a date
- return 10 date strings  

Then another potentially tricky part is entering these as arguments to the `of` function.
Might be able to do something like, store these in an array and pass that array into the `of` function using spread:  

`dateStrings = [str1, str2, str3, ...]`  
`of(...dateStrings)`  

That might work. First things first.  

### 10 Days Prior to Array

This is how it works.
The following function returns an array with 10 days starting yesterday, and going back.  

Next step is to convert them to strings in the format `yyyy-mm-dd`.

```ts
datesArray:Date[] = [];
daysPrior:number = 10;

getDates = function() {
  for (let i=0;i<this.daysPrior;i++) {
    let myDate = new Date(Date.now() - (i+1) * 24 * 60 * 60 * 1000)
    this.datesArray.push(myDate)
  }
  return this.datesArray
}
```

Pretty obvious, but this is called with

```ts
console.log(this.astroPicsService.getDates())
```

### Formatting the dates

So this is a few too many lines of code for my liking, but this does the job:

```ts
let oneDate = this.astroPicsService.getDates()[0]
let month = oneDate.getMonth() + 1;
let day = oneDate.getDate();
let year = oneDate.getFullYear();
let dateStr = `${year}-${month}-${day}`;
console.log(dateStr);
console.log(typeof(dateStr));
```

Here it is in one (two total) lines of code:

```ts
let dateStr2 = `${oneDate.getFullYear()}-${oneDate.getMonth() + 1}-${oneDate.getDate()}`;
```

And that's all I need to do for each of the items in the array, which is the next step.

### Formatting the Entire Array

Okay, so here it is:

```ts
datesArray:Date[] = [];
daysPrior:number = 10;

getDates = function() {
  for (let i=0;i<this.daysPrior;i++) {
    let myDate = new Date(Date.now() - (i+1) * 24 * 60 * 60 * 1000)
    let myDateStr = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`
    this.datesArray.push(myDateStr)
  }
  return this.datesArray
}
```

This logic does exactly what I want.
Might be able to condense it a little bit, but this returns an array of 10 days formatted how I need them to be.  

Now, bringing it together with concatMap.
Using the spread operator and passing in the function returns the observables properly  

I think I will use a resolver here.
Apparently there are problems with failing to unsubscribe, so why not handle this like I did the other module  

[This is good](https://www.joshuacolvin.net/angular-resolver/)  

So the resolver is fine, the request is fine.
By console logging in different places, you can see that when the route is resolved, each HTTP request is indeed made.  

The problem is, that I can only get the last object to be pushed to the array property in the component.  

So, it might be that the most recent observable is just replacing whatever was there before, which would explain why I can only see all of the responses when console logging at that specific point in the function.  

So I'm looking at concatMap vs. concatMapTo.
It's a bit to understand for the first time, but I'm getting somewhere.  

I think that the problem and solution lie in the service, the resolver's job is just to call the function in the service when the route is resolved.

## Video on RxJS

[source here](https://www.youtube.com/watch?v=ewcoEYS85Co)

- observable is a class
- Observable.create is a callback that can be used to notify a subscriber of some data
- Reactive => subscription means reacting to changes in the Observable data
- Observables can and should be completed
  - They'll be shut off and no longer emit data
- Can create observables from events in the dom with `fromEvent`
- Can set one up based on time interval
- Can control async/sync by modifying asyncScheduler
- Define observable with `of` (I wonder if this is hwere my problem is?)  

### Hot v Cold Observables

Hot can have multiple subscriptions, cold can only have one.
Cold Observables don't create the underlying value until they are subscribed to.
Often, you want to share a value between multiple subscribers, and so you would want to use a hot Observables.
You can make a cold Observable hot.  

`const hot = cold.pipe(share());` is one way for Observable `cold`.
Use `shareReplay` to cache the last value.

### Subjects

A hot Observable with the benefit of being able to have new values pushed to it.
I think this is in the ballpark of what I am looking for.
I might be working with an Observable that is not able to have new values pushed to it, and this would also explain why I'm only getting one object in my final array of objects from `concatMap`.  

- use `new Subject() and subscribe
- use `next:` method to add new values to the stream  

**Gotcha with this**: You need to have a subsciption set up before you start adding values to it.  

```ts
import { Subject, BehaviorSubject } from 'rxjs';

const subject = new Subject();

subject.subscribe(print);

subject.next('Hello');
subject.next('World');

```

### Behavior Subject

Similar to subject, but with the concept of a current value.
Last emitted value will be cached, like with shareReplay.
Every subscription will always receive a value.

### Operators

Control the flow of data through Observables.

- Use pipe to chain Operators, data "flows through the pipe"  

You can accumulate values as they flow through the operators, similar to using `reduce` with arrays

- Filter is used to keep certain values from being emitted in the stream
- Tap -> trigger side effects from inside the Observable stream  

***subscribe only gives access to the value at the end of the pipe***  

So that would explain a lot.

- An example that he gives is using `tap` to save the data to a backend database.  

I assume that this would be similar to using `tap` to store the data in an array.
Maybe I do do this in the resolver then? Or component?  

What I think is happening is that the service is really only emitting the last value in the Observable to the resolver.
When I console log in a tap after the concatMap, I get all of the responses.
I need to call this function and tap there.
I need to be able to return this property to my component.  

FINALLY got it.
Am not using resolver.
Added an argument to the method in the service, push to that array in `tap()`, and then pass in the empty array in the component and tack on subscribe at the end.  

Next, I want to make sure I end the subscription so that it doesn't keep going.  

Alright, so I added `ngOnDestroy`, and created a new subject.
Then added pipe, called takeUntil, and the ngOnDestroy calls `next` and `complete` when it is done.
This all still gets the data that I need.  

Now, some todos:

- commit this
- get rid of the resolver
- clean up all of the files
- put better names in there
- then get this into the UI.
- Then it's all styling from there.

## Moving Forward

Before merging, I need to hook up the live API data to the astronomy-pics view.
Then a little bit of cleanup could work.
Could even merge it right now, truthfully.
