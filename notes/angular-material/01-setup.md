# Angular Material

These go hand in hand. I'm watching the Angular Material Course, So I might as well check this out.
He'll go through things like sidenav, and they definitely have modals.  

So I'll have to remove Bootstrap, and uninstall it.  

Important, node modules will be changed, so should make a new dir as a clone.

```ps1
ng add @angular/material
```

Options:

- Deep Purple / Amber
- Global Material Typography Styles -> y
- Browser animations for Angular Material -> y
  - This is the majority of Angular's animations  

Angular Typography was applied, as you can see from the index.html.
You can remove the link to mat-typography if you don't want the global typography to be applied to the application.

## Creating a Material Master Module

This will report all of the Angular Material components that we use in the application.
Can just import the module where you want to use the components.  

Generate a new module using the cli called material

```ps1
ng g m modules/material --dry-run
# This looks good, so it was generated in this way.
```

This module has an import of CommonModule, but it was not imported into any other modules.

### Creating a Material Master Module

- Added imports to material.module.ts
- This module will not import CommonModule, it won't import anything, it serves only to export the Material stuff.  

**CHANGE**: I am actually going to get rid of this and just move it to the shared folder for better access.
