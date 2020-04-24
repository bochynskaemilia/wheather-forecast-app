import { IDailyWeatherProcessed, ILongTermWeatherFetched } from '../types/weatherTypes';

const processData = (
  weatherFetched: ILongTermWeatherFetched,
): IDailyWeatherProcessed[] => weatherFetched.DailyForecasts.map((daily) => {
  const {
    Date, Temperature, Day, Night,
  } = daily;

  return {
    date: Date,
    temperature: {
      min: {
        value: Temperature.Minimum.Value,
        unit: Temperature.Minimum.Unit,
      },
      max: {
        value: Temperature.Maximum.Value,
        unit: Temperature.Maximum.Unit,
      },
    },
    day: {
      text: Day.IconPhrase,
      hasPrecipitation: Day.HasPrecipitation,
      precipitationType: Day.PrecipitationType,
    },
    night: {
      text: Night.IconPhrase,
      hasPrecipitation: Night.HasPrecipitation,
      precipitationType: Night.PrecipitationType,
    },
  };
});

export default {
  processData,
};
