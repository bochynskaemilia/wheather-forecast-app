import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrentWeatherProcessed } from '../../../types/currentWeather';

interface InitialState {
  isError: boolean,
  isPending: boolean,
  currentWeather: ICurrentWeatherProcessed | null,
}

const initialState: InitialState = {
  isError: false,
  isPending: false,
  currentWeather: null,
};

const currentWeatherReducer = createSlice({

  name: 'currentWeather',
  initialState,

  reducers: {

    setCurrentWeather(state, { payload }: PayloadAction<ICurrentWeatherProcessed>) {
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
