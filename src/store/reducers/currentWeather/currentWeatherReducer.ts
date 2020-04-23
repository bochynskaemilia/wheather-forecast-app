import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeatherProcessed } from '../../../types/currentWeatherTypes';

interface InitialState {
  isError: boolean,
  isPending: boolean,
  currentWeather?: IWeatherProcessed,
}

const initialState: InitialState = {
  isError: false,
  isPending: false,
  currentWeather: undefined,
};

const currentWeatherReducer = createSlice({

  name: 'currentWeather',
  initialState,

  reducers: {

    setCurrentWeather(state, { payload }: PayloadAction<IWeatherProcessed>) {
      state.currentWeather = payload;
    },

    setIsError(state, { payload }: PayloadAction<boolean>) {
      state.isError = payload;
    },

    setIsPending(state, { payload }: PayloadAction<boolean>) {
      state.isPending = payload;
    },
  },
});

export const currentWeatherActions = currentWeatherReducer.actions;
export default currentWeatherReducer.reducer;
