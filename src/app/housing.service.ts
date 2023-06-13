import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  housingLocationList: Housinglocation[] =[ {
    id:9999,
    name:"Test Home",
    city:"Test City",
    state:"ST",
    photo:'assets/pexels-photo-323780.jpeg',
    availableUnits:99,
    wifi:true,
    laundry:false
  },
  {
    id:9999,
    name:"Test Home",
    city:"Test City",
    state:"ST",
    photo:'assets/pexels-photo-323780.jpeg',
    availableUnits:99,
    wifi:true,
    laundry:false
  },
  {
    id:9999,
    name:"Test Home",
    city:"Test City",
    state:"ST",
    photo:'assets/pexels-photo-323780.jpeg',
    availableUnits:99,
    wifi:true,
    laundry:false
  },
  {
    id:9999,
    name:"Test Home",
    city:"Test City",
    state:"ST",
    photo:'assets/pexels-photo-323780.jpeg',
    availableUnits:99,
    wifi:true,
    laundry:false
  },
  {
    id:9999,
    name:"Test Home",
    city:"Test City",
    state:"ST",
    photo:'assets/pexels-photo-323780.jpeg',
    availableUnits:99,
    wifi:true,
    laundry:false
  },
  {
    id:9999,
    name:"Test Home",
    city:"Test City",
    state:"ST",
    photo:'assets/pexels-photo-323780.jpeg',
    availableUnits:99,
    wifi:true,
    laundry:false
  }
]
getAllHousingLocations():Housinglocation[]{
  return this.housingLocationList;
}
getHousingLocationById(id:number):Housinglocation | undefined{
  return this.housingLocationList.find(housingLocation => housingLocation.id === id);
}
}
