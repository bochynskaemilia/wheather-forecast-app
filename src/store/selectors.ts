import geolocationSelectors from './reducers/geolocation/geolocationSelectors';
import currentWeatherSelectors from './reducers/currentWeather/currentWeatherSelectors';

const selectors = {
  geolocation: geolocationSelectors,
  currentWeather: currentWeatherSelectors,
};

export default selectors;
