import { geolocationActions } from './reducers/geolocation/geolocationReducer';
import geolocationSagaActions from './reducers/geolocation/geolocationSagaActions';

const actions = {
  geolocation: geolocationActions,
  geolocationSaga: geolocationSagaActions,
};

export default actions;
