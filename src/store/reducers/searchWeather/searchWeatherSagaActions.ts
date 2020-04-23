import { createAction } from '@reduxjs/toolkit';

export default {
  fetchAutocompleteLocations: createAction('fetchAutocompleteLocations'),
  searchWeather: createAction<string>('searchWeather'),
};
