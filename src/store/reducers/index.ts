import { combineReducers, PayloadAction } from '@reduxjs/toolkit';
import geolocation from './geolocation/geolocationReducer';

const appReducer = combineReducers({
  geolocation,
});

const rootReducer = (state: any, action: PayloadAction<any>) => appReducer(state, action);

export type RootState = ReturnType<typeof appReducer>;

export default rootReducer;
