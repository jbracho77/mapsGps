import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService) { }

  ngOnInit(): void {
  }

  onQueryChanged(query: string = ''): void {
    //console.log(query);

    if ( this.debounceTimer ) clearTimeout( this.debounceTimer );

    this.debounceTimer = setTimeout( () => {
      console.log( 'Mandar esta búsqueda ', query )
      this.placesService.getPlacesByQuery( query );
    }, 500)

  }

}
