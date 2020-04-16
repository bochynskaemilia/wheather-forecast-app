// eslint-disable-next-line no-unused-vars
import { combineReducers, PayloadAction } from '@reduxjs/toolkit';

const appReducer = combineReducers({});

const rootReducer = (state: any, action: PayloadAction<any>) => appReducer(state, action);

export default rootReducer;
