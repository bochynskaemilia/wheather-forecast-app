import { NullableString } from './genericTypes';

export interface ICurrentWeatherFetched {
  LocalObservationDateTime: string,
  EpochTime: number,
  WeatherText: string,
  WeatherIcon: number,
  HasPrecipitation: boolean,
  PrecipitationType: NullableString,
  IsDayTime: boolean
  Temperature: IMetricAndImperialUnit;
  MobileLink: string,
  Link: string,
  RealFeelTemperature: IMetricAndImperialUnit;
  RealFeelTemperatureShade: IMetricAndImperialUnit
  RelativeHumidity: number,
  DewPoint: IMetricAndImperialUnit;
  Wind: {
    Direction: {
      Degrees: number,
      Localized: string,
      English: string,
    },
    Speed: IMetricAndImperialUnit,
  },
  WindGust: IMetricAndImperialUnit,
  UVIndex: number,
  UVIndexText: string,
  Visibility: IMetricAndImperialUnit,
  ObstructionsToVisibility: string,
  CloudCover: number,
  Ceiling: IMetricAndImperialUnit,
  Pressure: IMetricAndImperialUnit,
  PressureTendency: {
    LocalizedText: string,
    Code: string,
  },
  Past24HourTemperatureDeparture: IMetricAndImperialUnit,
  ApparentTemperature: IMetricAndImperialUnit,
  WindChillTemperature: IMetricAndImperialUnit,
  WetBulbTemperature: IMetricAndImperialUnit,
  Precip1hr: IMetricAndImperialUnit,
  PrecipitationSummary: {
    Precipitation: IMetricAndImperialUnit,
    PastHour: {
      Metric: IMetricAndImperialUnit,
      Past3Hours: IMetricAndImperialUnit,
      Past6Hours: IMetricAndImperialUnit,
      Past9Hours: IMetricAndImperialUnit,
      Past12Hours: IMetricAndImperialUnit,
      Past18Hours: IMetricAndImperialUnit,
      Past24Hours: IMetricAndImperialUnit,
    },
    TemperatureSummary: {
      Past6HourRang: IMetricAndImperialUnit,
      Maximum: IMetricAndImperialUnit,
    },
    Past12HourRange: {
      Minimum: IMetricAndImperialUnit,
      Maximum: IMetricAndImperialUnit,
    },
    Past24HourRange: {
      Minimum: IMetricAndImperialUnit,
      Maximum: IMetricAndImperialUnit,
    }
  },
}

interface IUnitFetched {
  UnitType: number
  Value: number,
  Unit: string,
}

interface IMetricAndImperialUnit {
  Metric: IUnitFetched,
  Imperial: IUnitFetched,
}

interface IUnit {
  value: number,
  unit: string,
}

export interface ICurrentWeatherProcessed {
  temperature: IUnit,
  weatherText: string,
  hasPrecipitation: boolean,
  precipitationType: NullableString,
  realFeelTemperature: IUnit,
  pressure: IUnit,
}
