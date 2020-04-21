import { NullableString } from './genericTypes';

export interface ICurrentWeatherFetched {
  LocalObservationDateTime: string,
  EpochTime: number,
  WeatherText: string,
  WeatherIcon: number,
  HasPrecipitation: boolean,
  PrecipitationType: NullableString,
  IsDayTime: boolean
  Temperature: {
    Metric: ITemperatureFetched,
    Imperial: ITemperatureFetched,
  }
  MobileLink: string,
  Link: string,
}

interface ITemperatureFetched {
  UnitType: number
  Value: number,
  Unit: string,
}


interface ITemperature {
  value: number,
  unit: string,
}

export interface ICurrentWeatherProcessed {
  temperature: ITemperature,
  weatherIcon: number,
  hasPrecipitation: boolean,
  precipitationType: NullableString,
}
