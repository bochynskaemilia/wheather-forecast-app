import { IFetchedCountry, IProcessedGeoposition } from '../types/geolocationTypes';

const processData = (
  { Key, EnglishName, Country }: { Key: string, EnglishName: string, Country: IFetchedCountry },
): IProcessedGeoposition => ({
  userLocationKey: Key,
  location: EnglishName,
  country: Country.EnglishName,
});

export default {
  processData,
};
