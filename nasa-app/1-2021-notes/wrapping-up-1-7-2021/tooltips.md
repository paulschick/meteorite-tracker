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

<button mat-raised-button #tooltip="matTooltip"
        matTooltip="Info about the action"
        matTooltipPosition="right"
        aria-tooltip="Button that displays and hides a tooltip triggered by other buttons">
  Action
</button>
```

## Implementation

Right now, I have a few instructional tooltips.
Next, I'm going to use tooltips on the meteorite list, this is the current replacement for a modal.
The tooltip will be dynamic and display information about that meteorite.
