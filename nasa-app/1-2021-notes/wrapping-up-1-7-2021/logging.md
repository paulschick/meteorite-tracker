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
