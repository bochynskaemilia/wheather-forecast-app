import { RootState } from '../index';
import { IProcessedGeoposition } from '../../../types/geolocationTypes';
import { IWeatherProcessed } from '../../../types/currentWeatherTypes';

const getSearchValue = (state: RootState): string => state.searchWeather.searchValue;

const getWeather = (state: RootState): IWeatherProcessed | undefined => state.searchWeather.weather;

const isAutocompleteError = (state: RootState): boolean => state.searchWeather.autocompleteError;
const isSearchError = (state: RootState): boolean => state.searchWeather.isSearchError;
const isSearchPending = (state: RootState): boolean => state.searchWeather.isPending;

const getAutocompleteLocations = (
  state: RootState,
): IProcessedGeoposition[] => state.searchWeather.autocompleteLocations;

export default {
  getSearchValue,
  getAutocompleteLocations,
  isAutocompleteError,
  getWeather,
  isSearchError,
  isSearchPending,
};
