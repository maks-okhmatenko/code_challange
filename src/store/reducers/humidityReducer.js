import produce from 'immer';
import { HUMIDITY_CHANGED } from '../app.types';

export const initialState = {
  humidity: null,
};

export default (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case HUMIDITY_CHANGED:
      draft.humidity = action.payload;
      break;
    default:
      return state;
  }
});
