import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
    `img {
      width: 200px;
    }`
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService : CountryService,
    ){}
  
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) =>  this.countryService.searchCountryByAlpha (id) )
    )
    .subscribe( ( country ) => {
      if (!country) return this.router.navigateByUrl('')
      
      this.country = country;
      return;
    })
  }
}
