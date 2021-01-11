# Styling the App

- Home feature image
- show/filter btns aren't centered
- random image page
- revisit image sizing

## UI Design

I will follow some dark theme tutorials.
I want to wrap this up, no problem getting external inspiration.

### Sources

- [Mobile App UI Design Tutorial](https://www.youtube.com/watch?v=jYAmKNOJ4Ck)
- [Soft UI Dark Theme Website Design](https://www.youtube.com/watch?v=-kTw4tP1rjw)
  - Adobe, though

The home page is great to get the styling done on, but this is a feature branch, so I don't have to have it.
What must be worked on is:

- random image page
- Home page header image layout
- Astronomy Pictures page -> play with the card styling
- Also deal with the non-jpg filetypes that come in through the api.
  - Don't dislay an empty image tag here.

## Smooth Scrolling

### [Guide 01 Here](https://medium.com/@navyjot/smooth-scroll-in-angular-c3e9942d23a1)

Updated routing module to enable smooth scrolling:

```ts
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
```

## Home Page -> First and Second Folds

Both folds were styled such that they take up the full view height.
when you click the scroll button, the second half of the page fills the entire screen and you do not see the purple from the first section on all screen sizes.

### astronomy-pics-thumbnail.component.html from 03

```html
<mat-grid-list [cols]="columns"
    rowHeight="250px">
  <mat-grid-tile *ngFor="let astronomyPic of astronomyImages">
    <div class="astronomy-pics__gallery">
      <a [routerLink]="['image', astronomyPic.date]">
        <img
              class="astronomy-pics-img"
              *ngIf="astronomyPic.url.includes('.jpg')"
              [src]="astronomyPic.url"
              [alt]="astronomyPic.title"
            />
      </a>
    </div>
  </mat-grid-tile>
</mat-grid-list>
```

layout scss

```scss
.astronomy-pics__gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}

.astronomy-pics-img {
  max-width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  transition: .5s;
  width: 200px;
}

.astronomy-pics-img:hover {
  filter: grayscale(100%);
  transform: scale(1.1);
}

.astronomy-pics__description-wrapper {
  width: 150px;
}

.astronomy-pics__description {
  color: $darkmode-font-heading;
}

```
