import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  async  initMap(): Promise<void> {
    // const map = new google.maps.Map(document.getElementById('map'), {
    //   center: { lat: 33.452, lng: -112.074 },
    //   zoom: 10
    // });
    const position = { lat: 33.452, lng: -112.074 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const ufoImage = "../../assets/ufo.png"

    const map = new Map(document.getElementById("map"), {
      zoom: 10,
      center: position,
      mapId: 'anyId',
      disableDefaultUI: true
    });

    // One method of adding a marker
    // Using icon for an image does NOT work on this one
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Ufo",
    });

    // Legacy method of adding a marker
    // Using icon for an image works on this one
    new google.maps.Marker({
      position: {lat: 33.452, lng: -112.274},
      map: map,
      icon: ufoImage,
    });


  }
}
