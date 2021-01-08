# Logger Services

If any features are to be added before delivery, it would be to improve the application logging practices.
This is something admittedly I've not spent much time on.

## Current Setup

My logging capability is extended to an error handler service, `NasaErrorHandlerService`.
Third-party library: `ngx-logger`.
Has 5 starts, 20k weekly downloads, this is definitely the move as far as 3rd parties go.
Why reinvent the wheel.
Learn more, maybe create a custom one down the road, but fill the need right now.

```ps1
npm i ngx-logger -s
```

Successful install, very quick. Good.  
[I am following this guide](https://dzone.com/articles/angular-logging-and-log-back).  

## Setting up ngx-logger

Imported into the app module:

```ts
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
```

Added to the imports in the Module:

```ts
imports: [
  HttpClientModule,
  materialModules,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  LoggerModule.forRoot({level: NgxLoggerLevel.INFO})
]
```

NOTE: the example is different.
I don't have a backend, so I'm not doing the server-specific stuff.
I want to use this to get information about the processes running, so I chose info.

## Creating a Logger Interceptor

I will create an interceptor so that this fires anytime there is a request made.
Custom logger interceptor implemented for info and debug for all requests.
Successfully operating.
