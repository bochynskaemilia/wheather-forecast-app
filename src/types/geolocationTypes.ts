import { NullableNumber } from './genericTypes';

export interface FetchedGeolocation {
  coords: FetchedCoordinates,
  timestamp: number,
}

export interface FetchedCoordinates {
  latitude: number,
  longitude: number,
  altitude: NullableNumber,
  accuracy: number,
  altitudeAccuracy: NullableNumber
  heading: NullableNumber
  speed: NullableNumber
}
