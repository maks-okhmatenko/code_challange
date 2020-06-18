import reducer from './airPressureReducer'
import * as types from '../app.types'

describe('airPressureReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      airPressure: null,
    })
  })

  it('should handle AIR_PRESSURE_CHANGED', () => {
    expect(
      reducer(undefined, {
        type: types.AIR_PRESSURE_CHANGED,
        payload: 55,
      })
    ).toEqual({
      airPressure: 55,
    });
  });
});
