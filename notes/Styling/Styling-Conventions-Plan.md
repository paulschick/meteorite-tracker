# Applying Proper Styling Conventions

- [Applying Proper Styling Conventions](#applying-proper-styling-conventions)
  - [Global Styles](#global-styles)
  - [The Plan](#the-plan)
  - [Bootstrap and On](#bootstrap-and-on)
    - [Uninstalling Bootstrap](#uninstalling-bootstrap)

Based on the Styling Angular Apps Pluralsight course.
There are a good few things that need to be implemented here.  

After going through that course, it's clear that a lot more goes into applying and organizing names of classes and styling than I put into this application.

- Switch to SCSS
- Apply the BEM naming convention
- Style using only classes (no Ids)
- Use SCSS partials and import to a main component scss file that includes only the imports
- Compile to a css file in the scss folder for the component and link to that from the component TypeScript file  

And more than that, these are just a few things right off the bat.  

## Global Styles

For global styles, I'll do a ***css reset***  

Normalize.css <- This is a large css file, that should not be in the app folder, but in the root of the project like in the same dir that the notes folder is in.
Just link to this in the index.html file and it will be applied globally.
This is a best practice that should always be done.

## The Plan

In styling this application, I will need to actually have an application.
So rather than just thinking about complex framework functions, let's get some pages, some routes, and some UI components that can actually be styled.  

What's funny is that with Angular, even very simple stuff can have a lot of moving parts.  

I'm very happy with where the application is now. I will need to do more restructuring of where the code is held.
Additionally, even though I went from external component stylesheets to inline styles, I will now go back to external stylesheets.
With that, I'll be creating 4 partical scss files and 1 main scss file (as a basic rule, I want these to be consistent. Some may have more, and maybe the 4 partials that I use are different from content, global, header, footer.).  

I'd like to have some nice basic UI components; cards, gallery, whatever.
The goal with this application is just to have something kind of cool that even I would like to look at.  

There's this awesome free content from Nasa like pictures and information, and the goal of this app is to serve that information to an application where you can look at the pictures and see what kind of data is being collected.
Like, there's not much you can do with the list of meteorites, but I've even spent some minutes just scrolling through and reading how large the meteorites are, and when they landed.
So it's just a fun application.  

I like the blue colors that I'm using, I think that those could be a good basis for how the theme will be laid out.  

## Bootstrap and On

I actually might just get rid of Bootstrap.
All I am really using from it is containers.
This is something that I can easily do with SCSS, although it will take a little bit of time.  

This is good practice though for isolating different screen sizes and using & understanding relative dimensions like em and rem.
I do use em all of the time, but breakpoints are always a certain number of rems.  

I could have different pages for planets. There is an Earth Imagery API, near-earth comets API.  

***When I am ready to remove Bootstrap*** I have to just use `npm uninstall`.  

### Uninstalling Bootstrap

- Uninstall the dependency
- Remove from angular.json, package.json, package-lock.json if it was not changed automatically  

angular.json line 30

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
],
```

Make sure that this is no longer pointing to bootstrap min css.
That should be it for angular.json.  

package.json, lines 23-24

```json
"@ng-bootstrap/ng-bootstrap": "^8.0.0",
    "bootstrap": "^4.5.0",
```

That should go automatically, but double-check.  

package-lock.json, there are a fair number of references to Bootstrap.
Just Ctrl + F (from insert mode) and remove all of those instances.  

Make sure to just make a branch before doing that so that the changes can always be reverted if I mess up one of the json files.
