import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnChanges {

  @Input()
  weather: any;

  tempMax: number;
  tempMin: number;
  icon: string;
  humidity: number;
  dayOfWeek: string;
  des: string;
  wind: number;

  constructor() { }

  ngOnChanges() {
    if (this.weather) {
      this.tempMax = Number((this.weather.main.temp_max - 273.15).toFixed(2));
      this.tempMin = Number((this.weather.main.temp_min - 273.15).toFixed(2));
      this.icon = environment.icon.weather + this.weather.weather[0].icon + '.png' ;
      this.dayOfWeek = this.weather.dayOfWeek;
      this.des = this.weather.weather[0].description;
      this.humidity = this.weather.main.humidity;
      this.wind = this.weather.wind.speed;
    }
  }
}
