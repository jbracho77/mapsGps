import { Component, OnInit } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent implements OnInit {

  constructor( private placesService: PlacesService, 
               private mapService: MapService ) { }

  ngOnInit(): void {
  }

  goToMyLocation(): void {
    //console.log('Ir a mi ubicación')
    if ( !this.placesService.isUserLocationReady ) throw Error('No hay ubicación de usuario');
    if ( !this.mapService.isMapREady ) throw Error('No hay mapa disponible');

    this.mapService.flyTo(this.placesService.userLocation!);

  }

}
