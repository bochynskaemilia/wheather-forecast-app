import { NullableString } from './genericTypes';

export interface ICurrentWeatherFetched extends IPrecicipitationFetched {
  LocalObservationDateTime: string,
  EpochTime: number,
  WeatherText: string,
  WeatherIcon: number,
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

export interface IWeatherProcessed extends IPrecicipitation {
  temperature: IUnit,
  weatherText: string,
  realFeelTemperature: IUnit,
  pressure: IUnit,
}

export interface ILongTermWeatherFetched {
  Headline: {
    EffectiveDate: string,
    EffectiveEpochDate: number,
    Severity: number,
    Text: string
    Category: string,
    EndDate: string
    EndEpochDate: number,
    MobileLink: string,
    Link: string,
  },
  DailyForecasts: IDailyWeatherFethed[]
}

interface IDailyWeatherFethed {
  Date: string,
  EpochDate: number,
  Temperature: {
    Minimum: IUnitFetched,
    Maximum: IUnitFetched,
  },
  Day: IWeatherFetched,
  Night: IWeatherFetched,
  Sources: string[]
  'MobileLink': string,
  'Link': string,
}

interface IWeatherFetched extends IPrecicipitationFetched {
  Icon: number,
  IconPhrase: string,
  PrecipitationIntensity: string,
}

export interface IDailyWeatherProcessed {
  date: string,
  temperature: {
    min: IUnit,
    max: IUnit,
  },
  day: IWeather,
  night: IWeather,
}

interface IWeather extends IPrecicipitation {
  text: string,
}

interface IPrecicipitation {
  hasPrecipitation: boolean,
  precipitationType: NullableString,
}

interface IPrecicipitationFetched {
  HasPrecipitation: boolean,
  PrecipitationType: NullableString,
}
