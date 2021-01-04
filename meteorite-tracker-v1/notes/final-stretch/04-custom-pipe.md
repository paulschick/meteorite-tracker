# Creating a Custom Pipe

Format the meteorite mass from grams to kilograms.

## Initial Structure

- Add to shared/pipes/mass.pipe.ts
- Takes in a parameter of value  

I know that the mass is on the model as a string.
So this will take in a string, convert to number, perform the transform, and return a string.  

## Finished

Okay so it's format-mass.pipe.ts, and I have it in the declarations and exports of the shared module.
It takes in an argument of value, so just passin `meteorite.mass` and it works.
