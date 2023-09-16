import { Component, OnInit } from '@angular/core';
import { MockMarkersService } from '../mock-markers.service';

declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {
  phoenixUfo: { position: { lat: number; lng: number; }; title: string; }[];

  constructor(private MockMarkersService: MockMarkersService) {
    this.phoenixUfo = MockMarkersService.markersInPhoenix;
   }
   

  ngOnInit(): void {
    this.initMap();
  }

  async  initMap(): Promise<void> {
    
    // Sets position and initializes Map to be used in new Map step
    // Imports AdvancedMarkerElement to create marker using image
    const position = { lat: 33.452, lng: -112.074 };
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    // const ufoImage = this.getMarkerDetails();

    // Creates Map
    const map = new Map(document.getElementById("map")as HTMLElement, {
      zoom: 10,
      center: position,
      mapId: 'anyId',
      disableDefaultUI: true
    });
    // assign markers passed in to list used for adding marker details
  // const listOfMarkers = this.phoenixUfo;

  const infoWindow  = new InfoWindow();
  this.phoenixUfo.forEach(({position, title}, i) => {
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

    // Legacy method of adding a marker
    // Using icon for an image works on this one VVVVV
    // new google.maps.Marker({
    //   position: {lat: 33.452, lng: -112.274},
    //   map: map,
    //   icon: ufoImage.src,
    //   content: pinScaled.element,
    // });

  } // end of Init Function

   getMarkerDetails(): HTMLImageElement {
    const ufoImage = document.createElement('img');
    ufoImage.src = "../../assets/ufo.png";
    ufoImage.width = 80; 
    ufoImage.height = 80;
    return ufoImage;
    
  } 

} // end of class
