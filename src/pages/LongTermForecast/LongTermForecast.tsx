import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/actions';
import selectors from '../../store/selectors';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import LongTermWeatherTile from '../../components/LongTermWeatherTile/LongTermWeatherTile';

const LongTermForecast = () => {
  const dispatch = useDispatch();
  const userLocationKey = useSelector(selectors.geolocation.getUserLocation);

  const location = useSelector(selectors.geolocation.getUserLocation);
  const country = useSelector(selectors.geolocation.getUserCountry);

  const weather = useSelector(selectors.longTermWeather.getLongTermWeather);
  const isError = useSelector(selectors.longTermWeather.isError);
  const isPending = useSelector(selectors.longTermWeather.isPending);
  const geolocationUnavailable = useSelector(selectors.geolocation.isUnavailable);

  useEffect(() => {
    if (userLocationKey) {
      dispatch(actions.longTermWeatherSaga.fetchLongTermWeather());
    }
  },
  [dispatch, userLocationKey]);

  return (
    <div className="page">
      {
        location && country && <h2 className="body-header">{`${location}, ${country}`}</h2>
      }
      <div className="long-term">
        {
          (isError || geolocationUnavailable) && <Error message="Long-term forecast unavailable" />
        }
        {
          isPending && <Loader />
        }
        {
          weather && (
            weather.map((daily) => (
              <LongTermWeatherTile
                key={daily?.date}
                weather={daily}
              />
            ))
          )
        }
      </div>
    </div>
  );
};

export default LongTermForecast;
