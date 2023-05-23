import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';

//adding imports
import { CountriesService } from './services/countries.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    //adding httpclient modules
    HttpClientModule
  ],
  //adding countries service in providers
  providers: [CountriesService],
  //bootstraping with countries component
  bootstrap: [CountriesComponent]
})
export class AppModule { }
