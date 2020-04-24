import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDailyWeatherProcessed } from '../../../types/weatherTypes';

interface InitialState {
  isError: boolean,
  isPending: boolean,
  longTermWeather?: IDailyWeatherProcessed[],
}

const initialState: InitialState = {
  isError: false,
  isPending: false,
  longTermWeather: undefined,
};

const longTermWeatherReducer = createSlice({

  name: 'longTermWeather',
  initialState,

  reducers: {

    setLongTermWeather(state, { payload }: PayloadAction<IDailyWeatherProcessed[]>) {
      state.longTermWeather = payload;
    },

    setIsError(state, { payload }: PayloadAction<boolean>) {
      state.isError = payload;
    },

    setIsPending(state, { payload }: PayloadAction<boolean>) {
      state.isPending = payload;
    },
  },
});

export const longTermWeatherActions = longTermWeatherReducer.actions;
export default longTermWeatherReducer.reducer;
