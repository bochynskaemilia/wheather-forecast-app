import { combineReducers, PayloadAction } from '@reduxjs/toolkit';
import geolocation from './geolocation/geolocationReducer';
import currentWeather from './currentWeather/currentWeatherReducer';
import searchWeather from './searchWeather/searchWeatherReducer';

const appReducer = combineReducers({
  geolocation,
  currentWeather,
  searchWeather,
});

const rootReducer = (state: any, action: PayloadAction<any>) => appReducer(state, action);

export type RootState = ReturnType<typeof appReducer>;

export default rootReducer;
