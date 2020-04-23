import { IProcessedGeoposition } from '../types/geolocationTypes';
import { ILocations } from '../types/locationsTypes';

const processData = (
  locations: ILocations[],
): IProcessedGeoposition[] => locations.map((location) => ({
  userLocationKey: location.Key,
  location: location.LocalizedName,
  country: location.Country.ID,
} as IProcessedGeoposition));

export default {
  processData,
};
