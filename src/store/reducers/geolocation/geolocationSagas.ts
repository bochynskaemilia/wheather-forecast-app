import { call, put, takeLatest } from 'redux-saga/effects';
import { IFetchedCoordinates } from '../../../types/geolocationTypes';

import actions from '../../actions';
import geolocationTools from '../../../utils/geolocationTools';
import apiService from '../../../services/apiService';
import URLS from '../../../constants/urls';
import geolocationService from '../../../services/geolocationService';
import { GET } from '../../../constants/methods';

export function* runFetchGeolocation() {
  yield put(actions.geolocation.setIsPending(true));

  try {
    const { coords }: { coords: IFetchedCoordinates } = yield call(
      geolocationTools.getUserPosition,
    );

    const response = yield call(
      apiService.request,
      GET,
      {
        url: `${URLS.GEOPOSITION}${coords.latitude},${coords.longitude}`,
        processData: geolocationService.processData,
      },
    );

    if (response.isError || !response.data.userLocationKey) {
      yield put(actions.geolocation.setLocationUnavailable(true));
    } else {
      yield put(actions.geolocation.setUserLocationKey(response.data));
      yield put(actions.geolocation.setLocationUnavailable(false));
    }
  } catch (error) {
    yield put(actions.geolocation.setLocationUnavailable(true));
  }

  yield put(actions.geolocation.setIsPending(false));
}

export function* fetchGeolocationSaga() {
  yield takeLatest(actions.geolocationSaga.fetchGeolocation, runFetchGeolocation);
}
