import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Autosuggest from './Autosuggest/Autosuggest';
import actions from '../../../store/actions';

const PageTop: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.currentWeatherSaga.fetchCurrentWeather());
  }, [dispatch]);

  return (
    <div className="daily-page__top">
      <Autosuggest />
    </div>
  );
};

export default PageTop;
