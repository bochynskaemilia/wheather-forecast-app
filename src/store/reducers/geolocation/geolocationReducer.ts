import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Coordinates {
  lat?: number;
  long?: number;
}

interface InitialState extends Coordinates {
  disallowed: boolean,
}

const initialState: InitialState = {
  lat: undefined,
  long: undefined,
  disallowed: false,
};

const geolocationReducer = createSlice({

  name: 'geolocation',
  initialState,

  reducers: {

    setCoordinates(state, { payload }: PayloadAction<Coordinates>) {
      state.lat = payload.lat;
      state.long = payload.long;
    },

    setLocationDisallowed(state, { payload }: PayloadAction<boolean>) {
      state.disallowed = payload;
    },

  },
});

export const geolocationActions = geolocationReducer.actions;
export default geolocationReducer.reducer;
