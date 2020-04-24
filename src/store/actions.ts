import { geolocationActions } from './reducers/geolocation/geolocationReducer';
import geolocationSagaActions from './reducers/geolocation/geolocationSagaActions';
import { currentWeatherActions } from './reducers/currentWeather/currentWeatherReducer';
import { searchWeatherActions } from './reducers/searchWeather/searchWeatherReducer';
import searchWeatherSagaActions from './reducers/searchWeather/searchWeatherSagaActions';
import currentWeatherSagaActions from './reducers/currentWeather/currentWeatherSagaActions';
import { longTermWeatherActions } from './reducers/longTermWeather/longTermWeatherReducer';
import longTermWeatherSagaActions from './reducers/longTermWeather/longTermWeatherSagaActions';

const actions = {
  geolocation: geolocationActions,
  geolocationSaga: geolocationSagaActions,
  currentWeather: currentWeatherActions,
  currentWeatherSaga: currentWeatherSagaActions,
  searchWeather: searchWeatherActions,
  searchWeatherSaga: searchWeatherSagaActions,
  longTermWeather: longTermWeatherActions,
  longTermWeatherSaga: longTermWeatherSagaActions,
};

export default actions;
