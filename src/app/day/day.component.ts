import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input()
  dayDetails: any;

  tempMax: number;
  dayOfWeek: string;
  icon: string;

  constructor() { }

  ngOnInit() {
    if (this.dayDetails) {
      this.tempMax = Number((this.dayDetails.main.temp_max - 273.15).toFixed(2));
      this.dayOfWeek = this.dayDetails.dayOfWeek;
      this.icon = environment.icon.weather + this.dayDetails.weather[0].icon + '.png' ;
    }
  }
}
