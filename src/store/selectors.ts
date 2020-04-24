import geolocationSelectors from './reducers/geolocation/geolocationSelectors';
import currentWeatherSelectors from './reducers/currentWeather/currentWeatherSelectors';
import searchWeatherSelectors from './reducers/searchWeather/searchWeatherSelectors';
import longTermWeatherSelectors from './reducers/longTermWeather/longTermWeatherSelectors';

const selectors = {
  geolocation: geolocationSelectors,
  currentWeather: currentWeatherSelectors,
  searchWeather: searchWeatherSelectors,
  longTermWeather: longTermWeatherSelectors,
};

export default selectors;
