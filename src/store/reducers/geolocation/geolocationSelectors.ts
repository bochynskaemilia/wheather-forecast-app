import { RootState } from '../index';

const getUserLocationKey = (
  state: RootState,
): string | undefined => state.geolocation.userLocationKey;

const isPending = (state: RootState): boolean => state.geolocation.isPending;
const isUnavailable = (state: RootState): boolean => state.geolocation.unavailable;

export default {
  getUserLocationKey,
  isPending,
  isUnavailable,
};
