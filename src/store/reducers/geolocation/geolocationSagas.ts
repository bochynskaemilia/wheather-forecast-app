import { call, put, takeLatest } from 'redux-saga/effects';
import { FetchedCoordinates } from '../../../types/geolocationTypes';
import { Coordinates } from './geolocationReducer';

import actions from '../../actions';
import geolocationTools from '../../../utils/geolocationTools';

export function* runFetchGeolocation() {
  try {
    const { coords }: { coords: FetchedCoordinates } = yield call(geolocationTools.getUserPosition);

    const payload = {
      lat: coords.latitude,
      long: coords.longitude,
    } as Coordinates;

    yield put(actions.geolocation.setCoordinates(payload));
    yield put(actions.geolocation.setLocationDisallowed(false));
  } catch (error) {
    yield put(actions.geolocation.setLocationDisallowed(true));
  }
}

export function* fetchGeolocationSaga() {
  yield takeLatest(actions.geolocationSaga.fetchGeolocation, runFetchGeolocation);
}
