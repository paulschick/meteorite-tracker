# Applying Proper Styling Conventions

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
