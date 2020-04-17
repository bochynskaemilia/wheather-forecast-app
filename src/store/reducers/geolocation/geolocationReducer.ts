import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProcessedGeoposition } from '../../../types/geolocationTypes';

interface InitialState {
  userLocationKey?: string,
  unavailable: boolean,
  isPending: boolean,
}

const initialState: InitialState = {
  userLocationKey: undefined,
  unavailable: false,
  isPending: false,
};

const geolocationReducer = createSlice({

  name: 'geolocation',
  initialState,

  reducers: {

    setUserLocationKey(state, { payload }: PayloadAction<IProcessedGeoposition>) {
      state.userLocationKey = payload.userLocationKey;
    },

    setLocationUnavailable(state, { payload }: PayloadAction<boolean>) {
      state.unavailable = payload;
    },

    setIsPending(state, { payload }: PayloadAction<boolean>) {
      state.isPending = payload;
    },

  },
});

export const geolocationActions = geolocationReducer.actions;
export default geolocationReducer.reducer;
