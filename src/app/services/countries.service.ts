import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
//@injectable will perform DI -- dependency injection
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  //implementing the service
  constructor(private httpClient: HttpClient) // var of type HttpClient
  { }

  //method
  public getCountries(): any{
    //we are making a restful call by using .get, .put, .post, .delete ....
    //after making a call this will return the get() return as observable type
    //once we have a observable type we need to take it out... so to get the data out of observable use... return this.httpClient.get/post

    return this.httpClient.get("https://restcountries.com/v3.1/all")
  }
}
