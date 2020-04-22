import React from 'react';
import { useSelector } from 'react-redux';
import PageTop from '../../components/dailyWeatherPage/PageTop/PageTop';
import selectors from '../../store/selectors';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import PageBody from '../../components/dailyWeatherPage/PageBody/PageBody';

const OneDayForecast = () => {
  const userLocationKey = useSelector(selectors.geolocation.getUserLocationKey);
  const geolocationUnavailable = useSelector(selectors.geolocation.isUnavailable);
  const geolocationPending = useSelector(selectors.geolocation.isPending);

  return (
    <div className="daily-page">
      {
        geolocationUnavailable && (
          <div className="flex-full-width">
            <Error message="User location is unavailable" />
          </div>
        )
      }
      {
        geolocationPending && <Loader />
      }
      {
        userLocationKey && (
          <>
            <PageTop />
            <PageBody />
          </>
        )
      }
    </div>
  );
};

export default OneDayForecast;
