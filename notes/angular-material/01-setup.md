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

- This module has no imports, it only exports material modules  

NEXT in app.module.ts, add Material modules to imports (should be globally available now, might still need to import this into any module that's going to use it.  

NOTE: Since I will be using this right now in the Home module, and this is the module which holds the components in the Home page, I am going to import it to this module.
May change in the future when I create a Shared Module.  

BIG NOTE ON SERVICES  

Services are only supposed to be imported once. I had the home service in the Home and the Core module.
I removed the import from the Home module, and it still works.
Even in the main branch, this change needs to be made.  

The reason for this is because my core module is basically taking the place of the app module.
So all services should go through here.

- Okay, so now I'm going to import this to HomeModule.
  - It's a module not a service, so it can be imported where needed, I believe.  

### Dependencies

Material has some forms that will be used.
So, import `FormsModule` to HomeModule as well, so that I can make use of all of the `MaterialModule` dependencies on this module.  

Change Up  

I should have a shared module that exports these things, so I can just import the shared module.
That way any other module that wants to use Material, can just import the shared module.  

With that said, maybe instead of having a Material Module, I can have a shared module that will handle all of the imports that the Material Module was doing.  

### Shared Module Steps

- Renamed Material Module to Shared Module
- Imported and exported FormsModule as well as the Material Modules
- Updated import in Home Module to Shared Module
