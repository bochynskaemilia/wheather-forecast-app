import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import actions from '../../actions';
import apiService from '../../../services/apiService';
import URLS from '../../../constants/urls';
import { GET } from '../../../constants/methods';
import selectors from '../../selectors';
import searchWeatherService from '../../../services/locationsService';
import weatherService from '../../../services/weatherService';
import { PayloadAction } from '@reduxjs/toolkit';

export function* runFetchAutocompleteLocations() {
  const searchValue = yield select(selectors.searchWeather.getSearchValue);

  const response = yield call(
    apiService.request,
    GET,
    {
      url: `${URLS.LOCATIONS_AUTOCOMPLETE}${searchValue}`,
      processData: searchWeatherService.processData,
    },
  );

  if (response.isError) {
    yield put(actions.searchWeather.setAutocompleteError(true));
  } else {
    yield put(actions.searchWeather.setAutocompleteLocation(response.data));
  }
}

export function* fetchAutocompleteLocationsSaga() {
  yield takeLatest(
    actions.searchWeatherSaga.fetchAutocompleteLocations, runFetchAutocompleteLocations,
  );
}

export function* runSearchWeather({ payload }: PayloadAction<string>) {
  yield put(actions.searchWeather.setSearchPending(true));

  const response = yield call(weatherService.runFetchWeather, payload);

  if (response.isError || !response.data) {
    yield put(actions.searchWeather.setIsSearchError(true));
  } else {
    yield put(actions.searchWeather.setWeather(response.data));
  }

  yield put(actions.searchWeather.setSearchPending(false));
}

export function* searchWeatherSaga() {
  yield takeLatest(
    actions.searchWeatherSaga.searchWeather, runSearchWeather,
  );
}
