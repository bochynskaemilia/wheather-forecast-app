import { ICurrentWeatherFetched, ICurrentWeatherProcessed } from '../types/currentWeather';

const processData = (currentWeatherFetched: ICurrentWeatherFetched[]): ICurrentWeatherProcessed => {
  const {
    WeatherText,
    HasPrecipitation,
    PrecipitationType,
    Temperature,
    Pressure,
    RealFeelTemperature,
  } = currentWeatherFetched[0];

  return {
    weatherText: WeatherText,
    hasPrecipitation: HasPrecipitation,
    precipitationType: PrecipitationType,
    temperature: {
      value: Temperature.Metric.Value,
      unit: Temperature.Metric.Unit,
    },
    pressure: {
      value: Pressure.Metric.Value,
      unit: Pressure.Metric.Unit,
    },
    realFeelTemperature: {
      value: RealFeelTemperature.Metric.Value,
      unit: RealFeelTemperature.Metric.Unit,
    },
  } as ICurrentWeatherProcessed;
};

export default {
  processData,
};
