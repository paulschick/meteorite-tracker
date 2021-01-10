# Skip Caching for Random Image Generation

I can get the random image generator to work making an http request every time the button is pressed.
The problem is that this only works when the caching is disabled.
I am going to add a "skip" header to the request that I don't want to cache, and then add the conditional to the interceptor.  

[This solution is provided here](https://stackoverflow.com/questions/55522320/angular-interceptor-exclude-specific-urls/55522787) and is the basis of this git branch: `feature/random-image/astro-pics/add-section-selective-caching`  

- [Skip Caching for Random Image Generation](#skip-caching-for-random-image-generation)
  - [Adding Skip Headers](#adding-skip-headers)
  - [Implementing](#implementing)
  - [Next Step](#next-step)
    - [UPDATE](#update)

## Adding Skip Headers

```ts
this.http.get(url, {headers:{skip:"true"});
```

Apparently that is all that is required.
The headers will have to be an optional argument into the get request when this is refactored to handle all of the GET requests in the entire application.
For now, this will just go in the random image service, `rand-img.service.ts`, part of the `RandomImgV2Component`.

```ts
function getImg(url:string):Observable<IApd | NasaError> {
  return this.http.get<IApd>(url, {headers:{skip:"true"}})
    .pipe(
      take(1),
      catchError(err => this.handleHttpError(err))
    )
}
```

- Interceptor re-enabled in AppModule, as expected each button press displays the same image
- Added if statement to the interceptor  

This is very simple, and it works perfectly:

```ts
if(req.headers.get("skip")) {
  return next.handle(req);
}
```

## Implementing

This work, and I'll have to keep this out of the main branch for now, as this component and service have not yet been implemented.
Merge into `feature/random-image/astro-pics/add-section` and push for now.
Also, merge into `feature/random-image/refactor-request` and push, as this is an important part of that request as well.

## Next Step

Now that this is implemented, I can move into adding the random image section into the astro-pics view.
In order to do this, I should have a child component for the random-image view.  

Now that this branch is the same as the `/refactor-request` branch, I am going to use this branch specifically to make the changes.
Any issues with implementation that result in the need to revert, simple checkout `/refactor-request` and go from there.
No need to branch deeper from where I'm at right now.

### UPDATE

I'll need to be using the breakpoint service/directives that I created.
The 2-column grid layout is important for the astro-pics view if I am going to implement the random-image feature on this view as well.
Reason being that too much scrolling on that page will result in the feature being missed completely in some cases.
I can also add a button to the top fold (like on the home view) that will scroll down to the random image generator.
