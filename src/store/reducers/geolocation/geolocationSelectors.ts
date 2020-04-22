import { RootState } from '../index';

const getUserLocationKey = (
  state: RootState,
): string | undefined => state.geolocation.userLocationKey;

const getUserLocation = (
  state: RootState,
): string | undefined => state.geolocation.userLocation;

const getUserCountry = (
  state: RootState,
): string | undefined => state.geolocation.userCountry;

const isPending = (state: RootState): boolean => state.geolocation.isPending;
const isUnavailable = (state: RootState): boolean => state.geolocation.unavailable;

export default {
  getUserLocation,
  getUserCountry,
  getUserLocationKey,
  isPending,
  isUnavailable,
};
