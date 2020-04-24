import { all } from 'redux-saga/effects';
import { fetchGeolocationSaga } from './reducers/geolocation/geolocationSagas';
import { fetchCurrentWeatherSaga } from './reducers/currentWeather/currentWeatherSagas';
import { fetchAutocompleteLocationsSaga, searchWeatherSaga } from './reducers/searchWeather/searchWeatherSagas';
import { fetchLongTermWeatherSaga } from './reducers/longTermWeather/longTermWeatherSagas';

function* rootSaga() {
  yield all([
    fetchGeolocationSaga(),
    fetchCurrentWeatherSaga(),
    fetchAutocompleteLocationsSaga(),
    searchWeatherSaga(),
    fetchLongTermWeatherSaga(),
  ]);
}

export default rootSaga;
