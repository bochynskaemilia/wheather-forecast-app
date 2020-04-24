import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import actions from '../../actions';
import selectors from '../../selectors';
import apiService from '../../../services/apiService';
import { GET } from '../../../constants/methods';
import URLS from '../../../constants/urls';
import longTermWeatherService from '../../../services/longTermWeatherService';

export function* runFetchCurrentWeather() {
  yield put(actions.longTermWeather.setIsPending(true));

  const userLocationKey = yield select(selectors.geolocation.getUserLocationKey);

  const response = yield call(
    apiService.request,
    GET,
    {
      url: `${URLS.LONG_TERM_WEATHER}${userLocationKey}?`,
      processData: longTermWeatherService.processData,
    },
  );

  if (response.isError || !response.data) {
    yield put(actions.longTermWeather.setIsError(true));
  } else {
    yield put(actions.longTermWeather.setLongTermWeather(response.data));
  }

  yield put(actions.longTermWeather.setIsPending(false));
}

export function* fetchLongTermWeatherSaga() {
  yield takeLatest(actions.longTermWeatherSaga.fetchLongTermWeather, runFetchCurrentWeather);
}
