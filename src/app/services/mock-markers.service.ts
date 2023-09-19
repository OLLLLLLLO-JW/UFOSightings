import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockMarkersService {

  constructor() { }

  markersInPhoenix = [
    {
      position: { lat: 33.452, lng: -112.074 },
      title: "marker 1" 
    },
    {
      position:   { lat: 33.452, lng: -112.165 },
      title: "marker 2" 
    },
    {
      position:   { lat: 32.552, lng: -112.074 },
      title: "marker 3" 
    },
  ]

} // end of Marker Service class
