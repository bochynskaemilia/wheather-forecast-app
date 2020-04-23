import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProcessedGeoposition } from '../../../types/geolocationTypes';
import { IWeatherProcessed } from '../../../types/currentWeatherTypes';

interface InitialState {
  searchValue: string,
  autocompleteLocations: IProcessedGeoposition[],
  autocompleteError: boolean,
  location: IProcessedGeoposition | null,
  isPending: boolean,
  weather?: IWeatherProcessed,
  isSearchError: boolean,
}

const initialState: InitialState = {
  searchValue: '',
  autocompleteLocations: [],
  autocompleteError: false,
  location: null,
  isPending: false,
  weather: undefined,
  isSearchError: false,
};

const searchWeatherReducer = createSlice({

  name: 'searchWeather',
  initialState,

  reducers: {

    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },

    setAutocompleteLocation(state, { payload }: PayloadAction<IProcessedGeoposition[]>) {
      state.autocompleteLocations = payload;
    },

    setAutocompleteError(state, { payload }: PayloadAction<boolean>) {
      state.autocompleteError = payload;
    },

    setLocation(state, { payload }: PayloadAction<IProcessedGeoposition>) {
      state.location = payload;
    },

    clearLocations(state) {
      state.autocompleteLocations = [];
    },

    setSearchPending(state, { payload }: PayloadAction<boolean>) {
      state.isPending = payload;
    },

    setIsSearchError(state, { payload }: PayloadAction<boolean>) {
      state.isSearchError = payload;
    },

    setWeather(state, { payload }: PayloadAction<IWeatherProcessed>) {
      state.weather = payload;
    },
  },
});

export const searchWeatherActions = searchWeatherReducer.actions;
export default searchWeatherReducer.reducer;
