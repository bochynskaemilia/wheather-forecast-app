import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../../store/selectors';
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';
import WeatherTile from '../../WeatherTile/WeatherTile';
import actions from '../../../store/actions';

const PageBody = () => {
  const currentWeather = useSelector(selectors.currentWeather.getCurrentWeather);
  const isPending = useSelector(selectors.currentWeather.isPending);
  const isError = useSelector(selectors.currentWeather.isError);
  const location = useSelector(selectors.geolocation.getUserLocation);
  const country = useSelector(selectors.geolocation.getUserCountry);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.currentWeatherSaga.fetchCurrentWeather());
  }, [dispatch]);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Error message="Current weather details are unavailable" />;
  }

  return (
    <WeatherTile
      weather={currentWeather}
      location={location}
      country={country}
    />
  );
};

export default PageBody;
