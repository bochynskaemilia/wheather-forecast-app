import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/actions';
import selectors from '../../store/selectors';
import WeatherTile from '../../components/WeatherTile/WeatherTile';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';

const ForecastSearch = () => {
  const { location, country, id } = useParams();

  const dispatch = useDispatch();

  const weather = useSelector(selectors.searchWeather.getWeather);
  const isError = useSelector(selectors.searchWeather.isSearchError);
  const isPending = useSelector(selectors.searchWeather.isSearchPending);

  useEffect(() => {
    if (id) {
      dispatch(actions.searchWeatherSaga.searchWeather(id));
    }
  },
  [id, dispatch]);

  return (
    <div className="search-page page">
      {
        isError && <Error message="Cannot search weather" />
      }
      {
        isPending && <Loader />
      }
      {
        weather && <WeatherTile location={location} country={country} weather={weather} />
      }
    </div>
  );
};


export default ForecastSearch;
