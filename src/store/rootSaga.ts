import { all } from 'redux-saga/effects';
import { fetchGeolocationSaga } from './reducers/geolocation/geolocationSagas';
import { fetchCurrentWeatherSaga } from './reducers/currentWeather/currentWeatherSagas';

function* rootSaga() {
  yield all([
    fetchGeolocationSaga(),
    fetchCurrentWeatherSaga(),
  ]);
}

export default rootSaga;
