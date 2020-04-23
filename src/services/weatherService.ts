import { ICurrentWeatherFetched, IWeatherProcessed } from '../types/currentWeatherTypes';
import apiService from './apiService';
import { GET } from '../constants/methods';
import URLS from '../constants/urls';

const processData = (currentWeatherFetched: ICurrentWeatherFetched[]): IWeatherProcessed => {
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
  } as IWeatherProcessed;
};

const runFetchWeather = (userLocationKey: string) => apiService.request(
  GET,
  {
    url: `${URLS.CURRENT_WEATHER}${userLocationKey}?details=true`,
    processData,
  },
);

export default {
  processData,
  runFetchWeather,
};
