import React, { FC } from 'react';
import weatherTools from '../../utils/weatherTools';
import { IWeatherProcessed } from '../../types/weatherTypes';

interface Props {
  weather?: IWeatherProcessed,
  location?: string,
  country?: string,
}

const WeatherTile: FC<Props> = ({ weather, location, country }) => (
  <div className="tile">
    <h2 className="body-header">
      {`Current weather in ${location}, ${country}`}
    </h2>
    <ul className="weather-list">
      <li className="weather-list__item">
        {weather?.weatherText}
      </li>
      <li className="weather-list__item">
        {
          `Temperature: ${weatherTools.displayTemperature(
            weather?.temperature.value, weather?.temperature.unit,
          )}`
        }
      </li>
      <li className="weather-list__item">
        {
          `Real feel temperature: ${weatherTools.displayTemperature(
            weather?.realFeelTemperature.value, weather?.realFeelTemperature.unit,
          )}`
        }
      </li>
      <li className="weather-list__item">
        {`Pressure: ${weather?.pressure.value} hPa`}
      </li>
      {
        weather?.hasPrecipitation && (
          <li className="weather-list__item">
            {`Precipitation: ${weather?.precipitationType}`}
          </li>
        )
      }
    </ul>
  </div>
);

export default WeatherTile;
