const displayTemperature = (value?: number, unit?: string) => (value && unit ? `${Math.floor(value)} \xB0${unit}` : '');

export default {
  displayTemperature,
};
