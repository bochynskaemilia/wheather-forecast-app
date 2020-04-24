import React from 'react';
import { useSelector } from 'react-redux';
import selectors from '../../../store/selectors';
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';
import WeatherTile from '../../WeatherTile/WeatherTile';

const PageBody = () => {
  const currentWeather = useSelector(selectors.currentWeather.getCurrentWeather);
  const isPending = useSelector(selectors.currentWeather.isPending);
  const isError = useSelector(selectors.currentWeather.isError);
  const location = useSelector(selectors.geolocation.getUserLocation);
  const country = useSelector(selectors.geolocation.getUserCountry);

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
