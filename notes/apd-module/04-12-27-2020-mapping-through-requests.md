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
