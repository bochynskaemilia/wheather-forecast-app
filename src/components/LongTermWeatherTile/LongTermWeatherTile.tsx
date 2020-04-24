import React, { FC, useMemo } from 'react';
import format from 'date-fns/format';
import weatherTools from '../../utils/weatherTools';
import { IDailyWeatherProcessed } from '../../types/weatherTypes';

interface Props {
  weather?: IDailyWeatherProcessed,
}

const LongTermWeatherTile: FC<Props> = ({ weather }) => {
  const date = useMemo(
    () => (weather?.date ? format(new Date(weather?.date), 'dd-MMM-yyyy') : ''),
    [weather],
  );

  return (
    <div className="tile tile--long-term">
      <h2 className="body-header">{date}</h2>
      <ul className="weather-list">
        <li className="weather-list__item">
          {
            `Min Temperature: ${weatherTools.displayTemperature(
              weather?.temperature.min.value, weather?.temperature.min.unit,
            )}`
          }
        </li>
        <li className="weather-list__item">
          {
            `Max Temperature: ${weatherTools.displayTemperature(
              weather?.temperature.max.value, weather?.temperature.max.unit,
            )}`
          }
        </li>
        <li className="weather-list__item">
          {
            `Day: ${weather?.day.text}`
          }
        </li>
        {
          weather?.day.hasPrecipitation && (
            <li className="weather-list__item">
              {`Precipitation daily: ${weather?.day.precipitationType}`}
            </li>
          )
        }
        <li className="weather-list__item">
          {
            `Night: ${weather?.night.text}`
          }
        </li>
        {
          weather?.night.hasPrecipitation && (
            <li className="weather-list__item">
              {`Precipitation nighty: ${weather?.night.precipitationType}`}
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default LongTermWeatherTile;
