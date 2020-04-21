import { ICurrentWeatherFetched, ICurrentWeatherProcessed } from '../types/currentWeather';

const processData = (currentWeatherFetched: ICurrentWeatherFetched[]): ICurrentWeatherProcessed => {
  const {
    WeatherIcon,
    HasPrecipitation,
    PrecipitationType,
    Temperature,
  } = currentWeatherFetched[0];

  return {
    weatherIcon: WeatherIcon,
    hasPrecipitation: HasPrecipitation,
    precipitationType: PrecipitationType,
    temperature: {
      value: Temperature.Metric.Value,
      unit: Temperature.Metric.Unit,
    },
  } as ICurrentWeatherProcessed;
};

export default {
  processData,
};
