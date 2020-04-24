import { RootState } from '../index';
import { IDailyWeatherProcessed } from '../../../types/weatherTypes';

const isError = (state: RootState): boolean => state.longTermWeather.isError;
const isPending = (state: RootState): boolean => state.longTermWeather.isPending;
const getLongTermWeather = (
  state: RootState,
): IDailyWeatherProcessed[] | undefined => state.longTermWeather.longTermWeather;

export default {
  isError,
  isPending,
  getLongTermWeather,
};
