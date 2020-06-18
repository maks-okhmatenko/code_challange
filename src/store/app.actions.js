import { TEMPERATURE_CHANGED, AIR_PRESSURE_CHANGED, HUMIDITY_CHANGED } from './app.types';

export const changeTemperature = (payload) => ({ type: TEMPERATURE_CHANGED, payload });
export const changeAirPressure = (payload) => ({ type: AIR_PRESSURE_CHANGED, payload });
export const changeHumidity = (payload) => ({ type: HUMIDITY_CHANGED, payload });
