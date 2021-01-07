# Adding Charts and Stats About the Meteorites

The purpose is to add some more dynamic functionality, and an interesting feature about the meteorites.
This is a way to show some more skills that aren't explicitly in the learning path.
Additionally, this is another way to implement data manipulation, an Event But, and Container-Presentation Pattern.  

I have one day to finish the project, so I need to evaluate the payoff of this.
My hope is that I'll be demonstrating the use of a pipe in the place of where a function might be used, and also to communicate between components that aren't nested.
Namely, using an Event Bus to communicate.
Also, to have loosely coupled services, like the Modal and Modal Trigger service, as well as Material Tooltips.  

This could potentially show a good improvement in design from the original application to the addition of this new feature.
I should be able to add this feature without manipulating the meteorite source code.
That is another big point.

- [Adding Charts and Stats About the Meteorites](#adding-charts-and-stats-about-the-meteorites)
  - [Considering the Use](#considering-the-use)
    - [What Would I want to Chart?](#what-would-i-want-to-chart)
    - [ng2-charts Scatter Plot Demo](#ng2-charts-scatter-plot-demo)

## Considering the Use

### What Would I want to Chart?

Here is the available numerical data that is interesting:

- mass
- geolocation (latitude/longitude)
- year (full date)  

I could make a [histogram](https://codepen.io/jpgupta/pen/LOEeRg) of the meteorite masses, showing where the current one falls in a popup modal when the meteorite element is clicked.
For this, I would have ranges of mass represented by an individual bar.
The way to use individual masses would be to do like a gaussian distribution.  

Or, I could do a timeseries that shows number of meteorites per year.
So the time is each year and the value being tracked is the number of meteorites observed.  

Another option is a scatter chart.
The X-Axis would be year, and the Y-Axis would be mass.
Each meteorite in a given year will be plotted at the same location on the X-Axis with varying y-values.

### [ng2-charts Scatter Plot Demo](https://stackblitz.com/edit/ng2-charts-scatter-template)  

I like the scatter plot idea.
The meteorite in focus would need to be highlighted in the scatter plot.  

Looking at this example, I can see that the data will need to be in an array of objects.
Each object will have 2 keys: x and y.
Those would each have a value, x being year and y being mass.  

I would also like to have another value in the object where the key-value pair would be `id:number;`.
I need to first verify that I am receiving the id.
The id is how the clicked meteorite will be sent to the display chart.

[Here's another good tutorial post](https://www.freakyjolly.com/angular-chart-js-tutorial-using-ng2-charts-with-examples/#.X_cg8uhKiiM)

- I am receiving the id in the array of meteorite objects, no problem.
- ID and mass will just need to be converted to numbers.  

It does not look like I can add in an id for an individual data point in a scatter plot.
So, I'll have to identify the meteorite through its X & Y values.
Even if there is a duplicate, it doesn't matter because they will take up the same space.
Keep in mind there are 1000 pieces of data in the response, but I filter this down quite a bit.
The chart will probably need some modification.
