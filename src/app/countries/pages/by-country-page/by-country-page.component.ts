import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countries:Country[] = [];
  public initialValue:string = '';
  constructor( private countryService:CountryService ){}

  
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountry.countries;
    this.initialValue = this.countryService.cacheStore.byCountry.term;
  }

  searchByCountry( term:string ){
    this.countryService.searchCountry(  term )
    .subscribe( countries => {
      this.countries = countries;
    })
  }

}
