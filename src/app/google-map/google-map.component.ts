import { Component, OnInit } from '@angular/core';
import { MockMarkersService } from '../services/mock-markers.service';

declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {
  listOfMarkers: { position: { lat: number; lng: number; }; title: string; }[];

  constructor(private MockMarkersService: MockMarkersService) {
    this.listOfMarkers = MockMarkersService.markersInPhoenix;
   }
   

  ngOnInit(): void {
    this.initMap();
  }

  async  initMap(): Promise<void> {
    
    // Sets position and initializes Map to be used in new Map step
    // Imports AdvancedMarkerElement to create marker using image
    const position = { lat: 33.452, lng: -112.074 };
    const zoom = 10;
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const ufoImage = this.getMarkerDetails();
    // Get the bounds of all the markers
    const bounds = this.getBounds(this.listOfMarkers);

    // Creates Map
    const map = new Map(document.getElementById("map")!, {
      zoom,
      center: position,
      mapId: 'anyId',
      disableDefaultUI: true,
      // minZoom: zoom - 1,
      // maxZoom: zoom + 0,
    });
    map.fitBounds(bounds);

// Create Info window and customize each marker
  const infoWindow  = new InfoWindow();
  this.listOfMarkers.forEach(({position, title}, i) => {
    // Create new Img element for each marker
    const ufoImage = this.getMarkerDetails();

    const marker = new AdvancedMarkerElement({
      map,
      position,
      title: `${title}`,
      content: ufoImage
    });

    marker.addListener('click', () => {
      // const { target } = domEvent;
      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);

    });

  });

    // One method of adding a marker
    // Using icon for an image does NOT work on this one

    // const marker = new AdvancedMarkerElement({
    //   map: map,
    //   position: position,
    //   title: "Ufo",
    //   content: ufoImage
    // });

  } // end of Init Function

   getMarkerDetails(): HTMLImageElement {
    const ufoImage = document.createElement('img');
    ufoImage.src = "../../assets/ufo.png";
    ufoImage.width = 80; 
    ufoImage.height = 80;
    return ufoImage;
    
  } 

  getBounds(markers: { position: { lat: number; lng: number; }; }[]){
    let north;
    let south;
    let east;
    let west;
    
    for (const marker of markers){
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
      south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
      east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
      west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
    };
  
    const bounds = { north, south, east, west };
  
    return bounds;
  }

} // end of class
