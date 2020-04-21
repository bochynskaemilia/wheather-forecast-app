import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import actions from '../../actions';
import apiService from '../../../services/apiService';
import URLS from '../../../constants/urls';
import { GET } from '../../../constants/methods';
import selectors from '../../selectors';
import currentWeatherService from '../../../services/currentWeatherService';

export function* runFetchCurrentWeather() {
  yield put(actions.currentWeather.setIsPending(true));

  const userLocationKey = yield select(selectors.geolocation.getUserLocationKey);

  const response = yield call(
    apiService.request,
    GET,
    {
      url: `${URLS.CURRENT_WEATHER}${userLocationKey}?`,
      processData: currentWeatherService.processData,
    },
  );

  if (response.isError) {
    yield put(actions.currentWeather.setIsError);
  } else {
    yield put(actions.currentWeather.setCurrentWeather(response.data));
  }

  yield put(actions.currentWeather.setIsPending(false));
}

export function* fetchCurrentWeatherSaga() {
  yield takeLatest(actions.currentWeatherSaga.fetchCurrentWeather, runFetchCurrentWeather);
}
