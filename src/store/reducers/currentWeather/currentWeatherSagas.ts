import { call, put, select, takeLatest } from 'redux-saga/effects';

import actions from '../../actions';
import selectors from '../../selectors';
import weatherService from '../../../services/weatherService';

export function* runFetchCurrentWeather() {
  yield put(actions.currentWeather.setIsPending(true));

  const userLocationKey = yield select(selectors.geolocation.getUserLocationKey);

  const response = yield call(
    weatherService.runFetchWeather,
    userLocationKey,
  );

  if (response.isError || !response.data) {
    yield put(actions.currentWeather.setIsError(true));
  } else {
    yield put(actions.currentWeather.setCurrentWeather(response.data));
  }

  yield put(actions.currentWeather.setIsPending(false));
}

export function* fetchCurrentWeatherSaga() {
  yield takeLatest(actions.currentWeatherSaga.fetchCurrentWeather, runFetchCurrentWeather);
}
