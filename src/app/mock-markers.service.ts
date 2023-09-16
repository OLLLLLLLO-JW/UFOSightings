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
      position:  { lat: 33.462, lng: -112.265 },
      title: "marker 2" 
    },
  ]

} // end of Marker Service class
