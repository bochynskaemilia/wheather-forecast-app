import { all } from 'redux-saga/effects';
import { fetchGeolocationSaga } from './reducers/geolocation/geolocationSagas';

function* rootSaga() {
  yield all([
    fetchGeolocationSaga(),
  ]);
}

export default rootSaga;
