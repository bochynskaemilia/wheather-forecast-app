import React from 'react';
import { useSelector } from 'react-redux';
import selectors from '../../../store/selectors';
import Loader from '../../Loader/Loader';
import weatherTools from '../../../utils/weatherTools';

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
    return <div />;
  }

  return (
    <div className="daily-page__body">
      <div className="tile">
        <h2 className="body-header">{`Current weather in ${location}, ${country}`}</h2>
        <ul className="weather-list">
          <li className="weather-list__item">
            {currentWeather?.weatherText}
          </li>
          <li className="weather-list__item">
            {
              `Temperature: ${weatherTools.displayTemperature(
                currentWeather?.temperature.value, currentWeather?.temperature.unit,
              )}`
            }
          </li>
          <li className="weather-list__item">
            {
              `Real feel temperature: ${weatherTools.displayTemperature(
                currentWeather?.realFeelTemperature.value, currentWeather?.realFeelTemperature.unit,
              )}`
            }
          </li>
          <li className="weather-list__item">
            {`Pressure: ${currentWeather?.pressure.value} hPa`}
          </li>
          {
            currentWeather?.hasPrecipitation && (
              <li className="weather-list__item">
                {`Precipitation: ${currentWeather?.precipitationType}`}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default PageBody;
