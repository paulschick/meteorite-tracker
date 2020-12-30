# Do This

The video [right here](https://youtu.be/TqSgyFhrcXU?t=94)  

ngIf to see if there are meteorites/astro-pics, and if not show loading.
Have loading component. Material has a loading giphy.  

This guy also uses an interface for his service.
This is another way to add a layer of type checking on top of TypeScript.  

That is pretty interesting, I suppose for scaling.
Although if I want to add more HTTP requests it makes sense that, if they're going to similar APIs, that they be the same shape.  

Use that in the service like:

```ts
export class ExampleService implements IExampleService {

  constructor(private http: HttpClient) {  }
}
```

So creates a full file called `todo.mock.service.ts` to use with the spec file.
His `getTodos()` returns `of` to create an Observable.
And he builds an object in that Observable.  

So is this something that I should just be doing as I'm building the different peices of the application.  

So then he starts working with files in the environments folder, like `environment.ts`.
Oh, pretty cool, the purpose for doing this is literally setting the environments for development and production.
So in development you can default to the mock service, and in production you would not.
This way I can develop API calls without hitting the actual APIs.  

This is something that I should practice, because there will be times that I won't have access to the API that I am going to be working with in production.
But if I know the shape of the responses then I can create a mock service to use during development.  

It might be common to build out the frontend logic in Angular before even doing anything on the UI.
You would just have templates that are rendering stuff but you're not working with styling.
In the same token you may just be specifically building services for an application.  

To use this, in app.module.ts for providers he does:

```ts
providers: [
  ...environment.providers,
],
```
