import { NullableNumber } from './genericTypes';

export interface IFetchedGeolocation {
  coords: IFetchedCoordinates,
  timestamp: number,
}

export interface IFetchedCountry {
  ID: string,
  LocalizedName: string,
  EnglishName: string,
}

export interface IFetchedCoordinates {
  latitude: number,
  longitude: number,
  altitude: NullableNumber,
  accuracy: number,
  altitudeAccuracy: NullableNumber
  heading: NullableNumber
  speed: NullableNumber
}

export interface IProcessedGeoposition {
  userLocationKey: string,
  location: string,
  country: string,
}
