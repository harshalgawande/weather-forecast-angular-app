import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [WeatherService]

})

export class DashboardComponent implements OnInit {

  weatherItems: any[];
  selectedDayWeatherItem: any;

  constructor(private weatherService: WeatherService) {
  }

  private getDayOfWeek(dayOfWeek) {
    // const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  /* gives weather details for individual days
     weather API is giving weather data for every 3 hours while we have to show details for individual days
     filtering out unwanted weather details
  */
  private getDayWiseWeatherItems(items: any[]) {
    let nextTimeOfDay = -1;
    return items.filter(item => {
      const date = new Date(item.dt * 1000);
      console.log(date.getDate());
      const day = date.getDay();
      if (nextTimeOfDay === -1 || nextTimeOfDay === (item.dt * 1000)) {
        item.dayOfWeek = this.getDayOfWeek(day);
        nextTimeOfDay = (item.dt * 1000) + 86400000; // calculate same time for next day
        return true;
      } else {
        return false;
      }
    });
  }

  ngOnInit() {
    this.weatherService.getWeatherByCityId(environment.defaultCity.id).subscribe(response => {
      this.weatherItems = this.getDayWiseWeatherItems(response['list']);
      console.log('daywise ' + JSON.stringify(this.weatherItems));
      this.selectedDayWeatherItem = this.weatherItems[0];
    });
  }

  private selectDay(index) {
    this.selectedDayWeatherItem = this.weatherItems[index];
  }
}
