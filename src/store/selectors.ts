import geolocationSelectors from './reducers/geolocation/geolocationSelectors';
import currentWeatherSelectors from './reducers/currentWeather/currentWeatherSelectors';
import searchWeatherSelectors from './reducers/searchWeather/searchWeatherSelectors';

const selectors = {
  geolocation: geolocationSelectors,
  currentWeather: currentWeatherSelectors,
  searchWeather: searchWeatherSelectors,
};

export default selectors;
