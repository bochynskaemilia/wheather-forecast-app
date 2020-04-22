import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autosuggest from './Autosuggest/Autosuggest';
import actions from '../../../store/actions';
import Weather from './Weather/Weather';
import selectors from '../../../store/selectors';
import Error from '../../Error/Error';
import Loader from '../../Loader/Loader';

const PageTop: FC = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectors.currentWeather.isError);
  const isPending = useSelector(selectors.currentWeather.isPending);

  useEffect(() => {
    dispatch(actions.currentWeatherSaga.fetchCurrentWeather());
  }, [dispatch]);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="daily-page__top">

      {
        isError && (
          <div className="flex-full-width">
            <Error message="Current weather is unavailable" />
          </div>
        )
      }

      <Autosuggest />
      <Weather />
    </div>
  );
};

export default PageTop;
