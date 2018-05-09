// configuration properties for prduction environment

export const environment = {
  production: true,
  api: {
    key: 'e0b19a8ba34d3ea08e6665144a2b3613',
    endpoint: 'http://api.openweathermap.org/data/2.5/forecast'
  },
  defaultCity: {
    displayName: 'Pune',
    id: '1259229'
  },
  icon: {
    weather : 'http://openweathermap.org/img/w/'
  }
};
