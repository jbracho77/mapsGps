import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiamJyYWNobzc3IiwiYSI6ImNreWF6eTkzeTAxeHQyb3F2OTEyZDdlYTQifQ.1hsaQX1MKW8O-RXIHeo_iw';

if ( !navigator.geolocation ){
  alert('El navegador no soporta la geolocalización');
  throw new Error('El navegador no soporta la geolocalización');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
