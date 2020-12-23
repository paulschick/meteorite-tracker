# Restructuring the File Format

Right now, right in app/ I have meteorites and apd. These are component folders.
To expand this, I would like it more structured.  

I don't know how many more folders that I should add, and what I might like to put in shared folders, but something like this:

```bash
app
|   app-routing.module.ts
|   app.component.ts
|   app.module.ts
|   nasa-config.ts
|___core
|___components
    |   meteorites
    |       |   scss
    |       |     |   _partial.scss
    |       |     |   _partial.scss
    |       |     |   _partial.scss
    |       |     |   _partial.scss
    |       |
    |       |   meteorite-list.component.ts
    |       |   meteorite-detail.component.ts
    |       |   meteorite-display.component.ts
    |       |   meteorite-list.component.html
    |       |   meteorite-detail.component.html
    |       |   meteorite-display.component.html
    |       |   meteorite-list.component.scss
    |       |   meteorite-detail.component.scss
    |       |   meteorite-display.component.scss
|___models
|___services
```

and so on.  

Obviously there's more to it than that, which I will determine before making any large changes.
I do know, however, that I want to have a components folder to organize each of the components.
I still need to figure out how I want to handle a global scss file, as well as a reset file.  

[Here](https://meyerweb.com/eric/tools/css/reset/) is a very standard css reset file that can be put in the root dir and linked to index.html.
