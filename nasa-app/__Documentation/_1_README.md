# NEO

This is a project that has been used to learn Angular through application of concepts, and frequent refactoring.
The name 'NEO' comes from Nasa's term 'Near Earth Objects', referring to asteroids and comets in close proximity to earth.
What started off as a sandbox for writing out API requests to learn RxJS Operators has evolved into a full-fledged application for visualizing the open data from the NASA RESTful API.  

- [NEO](#neo)
  - [Installation](#installation)
  - [Use](#use)
  - [APIs](#apis)
  - [Contributing](#contributing)
  - [License](#license)
  - [Project Status](#project-status)

## Installation

clone the repo and install with npm.
This project has been developed with Node v15.3.0, and Angular CLI v11.0.4.
Currently, the only third-party dependency is Angular Material.  

It is suggested to have the Angular CLI installed globally.

```ps1
npm install -g @angular/cli
```

Install the project:

```ps1
cd neo
npm i
```

## Use

In order to use the API endpoints in this projects, you will need a NASA API key.
You can generate one [from here for free](https://api.nasa.gov/) by registering your email address.
There are many more APIS that can be used outside of the two used in this project.

## APIs

The two endpoints used in this project are **[Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html)** and the **[Meteorite Landings API](https://catalog.data.gov/dataset/meteorite-landings-api)**.  

API Description | Endpoint
----------------|---------
Astronomy Picture of the Day (APOD)|<https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY>
APD Date Range|<https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2020-01-01>
APOD n Random Images|<https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10>
Meteorite Landings|<https://data.nasa.gov/resource/gh4g-9sfh.json>

## Contributing

There are many improvements to be made and features to be added for this to be a comprehensive project for visualizing the data available through NASA.
Pull requests are welcome.  

## License

MIT

## Project Status

This project is in active development.
