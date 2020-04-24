import { RootState } from '../index';
import { IWeatherProcessed } from '../../../types/weatherTypes';

const isError = (state: RootState): boolean => state.currentWeather.isError;
const isPending = (state: RootState): boolean => state.currentWeather.isPending;
const getCurrentWeather = (
  state: RootState,
): IWeatherProcessed | undefined => state.currentWeather.currentWeather;

export default {
  isError,
  isPending,
  getCurrentWeather,
};
