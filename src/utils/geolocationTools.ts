import { IFetchedGeolocation } from '../types/geolocationTypes';

const getUserPosition = (options: object = {}): Promise<IFetchedGeolocation> => new Promise(
  (resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  },
);

export default {
  getUserPosition,
};
