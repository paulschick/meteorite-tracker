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
