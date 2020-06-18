import produce from 'immer';
import { AIR_PRESSURE_CHANGED } from '../app.types';

export const initialState = {
  airPressure: null,
};

export default (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case AIR_PRESSURE_CHANGED:
      draft.airPressure = action.payload;
      break;
    default:
      return state;
  }
});
