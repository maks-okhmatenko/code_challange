import { combineReducers } from 'redux';

import temperatureReducer from './reducers/temperatureReducer';
import airPressureReducer from './reducers/airPressureReducer';
import humidityReducer from './reducers/humidityReducer';

export default combineReducers({
  temperatureReducer,
  airPressureReducer,
  humidityReducer
});
