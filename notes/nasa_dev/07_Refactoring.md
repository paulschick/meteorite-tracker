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
