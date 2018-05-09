import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  getWeatherByCityId(cityId: string) {
    cityId = cityId || environment.defaultCity.id;
    return this.httpClient.get(environment.api.endpoint, {
      params: {
        id: cityId || environment.defaultCity.id,
        appid: environment.api.key
      }
    });
  }
}
