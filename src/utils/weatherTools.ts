import TEMPERATURE from '../constants/temperature';

const displayTemperature = (value?: number, unit?: string) => {
  let val;
  let u;

  if (unit === TEMPERATURE.FAHRENHEIT && value) {
    val = (value - 32) / 1.8;
    u = TEMPERATURE.CELSIUS;
  } else {
    val = value;
    u = unit;
  }

  return val && u ? `${Math.floor(val)} \xB0${u}` : '';
};

export default {
  displayTemperature,
};
