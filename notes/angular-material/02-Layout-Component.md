# Section 05 - Layout Component

- Flexbox overview first  

## Angular Flex Layout

- FlexBox CSS + mediaQuery
- This is a module for Angular
- Custom layout API  

I will add this to the application, might be helpful to use.  

```ps1
npm i -s @angular/flex-layout
```

Ran through the installation, was very quick.  

***I am importing & exporting this in the shared module***  

FlexLayoutModule was added to imports/exports of SharedModule.
I will need to learn how to use this in order to create layouts for the application.
Shouldn't be too difficult.

## Scaffolding the App

This is based on the course project.
May get some ideas from this.

## Sidenav and Toolbar

Created sidenav and toolbar components.
The router outlet is within the sidenav so that the sidenav opens into the page content.
Took some work, but the current setup is how this should be setup to work properly.

## Configuring the Sidenav

- Have the sidenav open if on large screen device when the page loads  

By looking at the documentation for the sidenav, and [going to the api tab](https://material.angular.io/components/sidenav/api) you can see the properties and methods that are available for the component.

- mode of the drawer between 'over' and 'side' depending if on a big screen or small screen device
- set the opened property to true or false depending on screen size  

First, these will be set to static properties in the component.
Later, they will be media queries.  

This work is done in the template.
Think of this all as taking @Input properties from Angular Components that we've imported through the Material Module.  

With this config:

```html
<mat-sidenav #sidenav class="app-sidenav"
        opened="true"
        mode="side">
```

The sidenav is opened, but you lose the shadow between the sidenav and the main content.
Also, it no longer toggles closed.

- Fix the shadow by adding the class `mat-elevation-z10`
