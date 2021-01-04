# Convert the Project to SCSS

## 01-scss

```ps1
ng add schematics-scss-migrate
```

Installs `schematics-scss-migrate` as a dev dependency.
Migrating from CSS to SCSS.
So installing it worked. It prompted me for the file types.  

When installed as dev dependency, you do:

```ps1
# If you don't want changes, add dry-run like this:
ng g schematics-scss-migrate:scss-migrate --dry-run
```

### Results

This changed all of my css files to scss.
What's cool is the components are all just linking to the scss files, they don't even need to be pointing to a css file.
I suppose the compiler just handles all of this, so that makes it easy.
I just want to run the server and make sure that everything looks okay.  

And the app is performing normally, so can merge with main.
