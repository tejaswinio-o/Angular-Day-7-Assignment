import { Component, OnInit } from '@angular/core';

//adding import for countries services
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  //creating var
  public data: any;

  //adding dependency injection
  constructor(private service: CountriesService) { }


  ngOnInit(): void {
    //logic
    //using service calling getCountries method
    //subscribe will subscribe to restful service
    this.service.getCountries().subscribe(
      (response: any) => {
        this.data = response;
      },
      //optional
      //incase error is getting we can catch it by exception handling
      (error: any) => {
        console.log(error)
      }
    )
  }


  //function to get currency name
  getCurrencyName(currencyCode: any): string {
    if (currencyCode && currencyCode.currencies) {
      const currencies = Object.values(currencyCode.currencies) as Array<{ name: string; symbol: string; }>;
      if (currencies.length > 0 && currencies[0].name) {
        return currencies[0].name;
      }
    }
    return '';
  }

}
