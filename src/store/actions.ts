import { geolocationActions } from './reducers/geolocation/geolocationReducer';
import geolocationSagaActions from './reducers/geolocation/geolocationSagaActions';
import { currentWeatherActions } from './reducers/currentWeather/currentWeatherReducer';
import currentWeatherSagaActions from './reducers/currentWeather/currentWeatherSagaActions';

const actions = {
  geolocation: geolocationActions,
  geolocationSaga: geolocationSagaActions,
  currentWeather: currentWeatherActions,
  currentWeatherSaga: currentWeatherSagaActions,
};

export default actions;
