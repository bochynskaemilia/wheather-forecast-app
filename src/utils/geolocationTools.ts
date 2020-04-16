import { FetchedGeolocation } from '../types/geolocationTypes';

const getUserPosition = (options: object = {}): Promise<FetchedGeolocation> => new Promise(
  (resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  },
);

export default {
  getUserPosition,
};
