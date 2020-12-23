# App Refactoring

Before moving on with adding more features, like the endpoint added in 06 notes, I need to refactor.
I was getting circular logic errors, and there is a problem with the meteorite .slice() method.  

So let's get a new branch and start refactoring. Break and rebuild.

## 01 Refactor

- routing
- routing module
- feature module
- both requests from one service
- do something with the index.ts files
- remove the selectors from the app component
- move logic out of components and into services

### Services

- apd.service.ts
- meteorite.service.ts  

Combine both of these to be data.service.ts  

- For the handleHttpError function, I'll need to create a model for the observable.
- I can copy the model in the booktracker project
- Added handleHttpError function, as well as nasaErrors class for the shape of the Observable when throwing an error.  

Both requests have been added to data.service, along with handleHttpError.  

- error conforms to NasaError
- Get requests conform to their models OR error model  

### Additional Information

Created new folder in app called core.
Created new folder in app called models.
NasaError class is in app/models.
data.service.ts is in app/core.  

This is how a lot of this stuff is going to be centralized.
The core folder should handle the requests, errors, services, interceptors, resolvers, and loggers.
I will create a core module to handle all of this too.  

### About the Import Barrels

In data.service, I did not import from the index.ts files.
I am planning on changing where these are and how they are used, so this will require a refactor later on import statements.  

## Creating the Core Module

This should be the next step. Getting this all linked up.
Then I want to start focusing on components, and reducing the logic that they handle as much as possible.  

I'm going to run the server, and if the app is still working just file I'll go ahead and merge the branches to push the new stuff.

## 02 Refactor

Changes merged and pushed.  

Next should be the core module, let's see how his is set up in the course...  

### Core Module

The providers in the module are the DataService, LoggerService, and the interceptors.
I'd like to add some interceptors later to better understand what they do.
I can skip the log response and add headers, as they don't actually do anything...
Or just do it for practice.  

Anyway, he has a CacheInterceptor which I would like to apply.  

What I don't understand in this module is the @Optional() and @SkipSelf decorators, as well as the parentmodule: CoreModule declaration in the constructor.  

This stuff applies if the module is already loaded. So you set the parent module to the module that it is.
I think I should just use this, and then come back and understand it later on.  

Seems just to help with lazy loading?

- created nasa-error-handler.service.ts for use in core module
- Created throwIfAlreadyLoaded error handler for core module
- Created Core Module  

For this branch, I'll test to make sure the app hasn't broken, and then merge and move on.  

And we're still good.  

One other thing I'll need to do is to deal with the partial loading of the component.
