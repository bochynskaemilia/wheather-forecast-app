import { RootState } from '../index';
import { ICurrentWeatherProcessed } from '../../../types/currentWeather';

const isError = (state: RootState): boolean => state.currentWeather.isError;
const isPending = (state: RootState): boolean => state.currentWeather.isPending;
const getCurrentWeather = (
  state: RootState,
): ICurrentWeatherProcessed | null => state.currentWeather.currentWeather;

export default {
  isError,
  isPending,
  getCurrentWeather,
};
