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
