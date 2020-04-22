import React from 'react';
import { useSelector } from 'react-redux';
import Widget from '../../../Widget/Widget';
import selectors from '../../../../store/selectors';
import weatherTools from '../../../../utils/weatherTools';

const Weather = () => {
  const location = useSelector(selectors.geolocation.getUserLocation);
  const country = useSelector(selectors.geolocation.getUserCountry);
  const currentWeather = useSelector(selectors.currentWeather.getCurrentWeather);

  return (
    <Widget>
      <span>{`${location},`}</span>
      <span className="weather-item">{country}</span>
      {
        weatherTools.displayTemperature(
          currentWeather?.temperature.value, currentWeather?.temperature.unit,
        )
      }
    </Widget>
  );
};

export default Weather;
