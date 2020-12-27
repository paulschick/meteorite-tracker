# 12-27

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
