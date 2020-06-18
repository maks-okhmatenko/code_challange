import * as actions from './app.actions';
import * as types from './app.types';

describe('actions', () => {
  it('should create an changeTemperature action', () => {
    const value = 100;
    const expectedAction = {
      type: types.TEMPERATURE_CHANGED,
      payload: value
    }
    expect(actions.changeTemperature(value)).toEqual(expectedAction)
  });
  it('should create an changeAirPressure action', () => {
    const value = 100;
    const expectedAction = {
      type: types.AIR_PRESSURE_CHANGED,
      payload: value
    }
    expect(actions.changeAirPressure(value)).toEqual(expectedAction)
  });
  it('should create an changeHumidity action', () => {
    const value = 100;
    const expectedAction = {
      type: types.HUMIDITY_CHANGED,
      payload: value
    }
    expect(actions.changeHumidity(value)).toEqual(expectedAction)
  })
});
