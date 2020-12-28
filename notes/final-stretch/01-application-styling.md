# Final Stretch -> Application Styling

**Primary Color Hex**: #673AB7  
**Primary Color rgb**: rgb(103,58,183)  
**Accent Hex**: #FFD740  
**Accent rgb**: rgb(255,215,64)  

Primary Dark Accent: rgb(44, 23, 80)  

- [Final Stretch -> Application Styling](#final-stretch---application-styling)
  - [Initial Todos](#initial-todos)
    - [Styling Components](#styling-components)
  - [Home Module](#home-module)
    - [On Styling and Angular Material](#on-styling-and-angular-material)
    - [Sidenav](#sidenav)
    - [Home](#home)
    - [meteorite-detail](#meteorite-detail)

## Initial Todos

There is a definite need for refactoring in the Home Module.
Priority right now is styling, and proper scss scaffolding.
This is where I'll start.  

### Styling Components

1. Home Page
2. Astronomy Pics Page
3. Astronomy Pic Detail Page  

That's all the views that exist.
Then, will refactor Home Module.
When this is done, need to make some kind of footer component and style that as well.
After this is all absolutely solid, I can make an about page or some informational content with author information.  

When it's ready to publish:

1. Create new public repo
2. Have API config in .gitignore and make sure it isn't pushed to Github
3. Build for production and push to Heroku  

## Home Module

### On Styling and Angular Material

The Angular Material course has really delivered all that it can for me.
The rest is pretty application-specific for the course project.  

The course "Styling Angular Applications" is the most relevant.  

I plan to do a mixture of using Material classnames (stick with the theme colors) as well as custom scss.
I can stick within the Angular theme with custom defined variables in the Global and Local scopes.  

With Styling Angular Applications, of the more relvant concepts are:

- variables
- mixins
- :host & :host-context  

I don't know how much I'll use :host.
I want to focus on proper file structure and scoping mainly.
There won't be a huge amount of custom scss, the focus is on having "enough" but with proper fundamentals in place.
No reason to shy away from built-in Material stuff.
Definitely get rid of unused Material Imports from the Shared Module (this will be trial and error, unfortunately)  

Breakpoints and Grid: FlexLayoutModule and Material where possible

### Sidenav

Replace home text with circular home button from Material

- Added material buttons to sidenav
  - Will need to be styled

### Home

I want a background color on the card heading -> will have to do with custom scss  

- Added template pages for all of the meteorite components & page.
- Added BEM classes to meteorite-display component template, made equivalent changes to main scss file (will all be in partials)  

**QUICK NOTE** changes are being made in main scss files right now.
Will be moved to partials after initial class changes are made throughout the application.  

### meteorite-detail

- converted to Material cards with some custom scss
