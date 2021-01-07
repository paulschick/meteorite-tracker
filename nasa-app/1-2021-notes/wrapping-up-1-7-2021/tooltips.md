# Material ToolTips

Pop up on hover.
Is there a way to indicate that you should hover?  

## [Documentation](https://material.angular.io/components/tooltip/examples)

**Tooltips can be manually shown or hidden**.
This is pretty cool, so instead of needing to "indicate" that a user should hover, the tooltip can just be displaying by default in a few places (***use sparingly***)  

[Manual Tooltip](https://stackblitz.com/angular/mkxyyraopjb?file=src%2Fapp%2Ftooltip-manual-example.html)  
Very simple, just do like...

```html
<button mat-button
    (click)="tooltip.show()">
  Show
</button>
<button mat-button
    (click)="tooltip.hide()">
  Hide
</button>
```
