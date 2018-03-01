import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = 'd7ea932d5788108e';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json');
  }
}
