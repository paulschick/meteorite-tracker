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
