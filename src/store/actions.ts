import { geolocationActions } from './reducers/geolocation/geolocationReducer';
import geolocationSagaActions from './reducers/geolocation/geolocationSagaActions';
import { currentWeatherActions } from './reducers/currentWeather/currentWeatherReducer';
import { searchWeatherActions } from './reducers/searchWeather/searchWeatherReducer';
import searchWeatherSagaActions from './reducers/searchWeather/searchWeatherSagaActions';
import currentWeatherSagaActions from './reducers/currentWeather/currentWeatherSagaActions';

const actions = {
  geolocation: geolocationActions,
  geolocationSaga: geolocationSagaActions,
  currentWeather: currentWeatherActions,
  currentWeatherSaga: currentWeatherSagaActions,
  searchWeather: searchWeatherActions,
  searchWeatherSaga: searchWeatherSagaActions,
};

export default actions;
