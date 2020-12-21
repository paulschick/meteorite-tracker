import { Injectable } from '@angular/core';

@Injectable()
export class MeteoriteService {
  getMeteorites() {
    return METEORITES
  }
}

const METEORITES = [
  {
    id: 1,
    name: 'Aachen',
    mass: 21,
    year: 1880
  },
  {
    id: 2,
    name: 'Aarhus',
    mass: 720,
    year: 1951
  },
  {
    id: 3,
    name: 'Abee',
    mass: 107000,
    year: 1952
  },
  {
    id: 4,
    name: 'Acapulco',
    mass: 1914,
    year: 1976
  },
  {
    id: 5,
    name: 'Achiras',
    mass: 780,
    year: 1902
  },

]
