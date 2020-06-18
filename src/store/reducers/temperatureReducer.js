import produce from 'immer';
import { TEMPERATURE_CHANGED } from '../app.types';

export const initialState = {
  temperature: null,
};

export default (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case TEMPERATURE_CHANGED:
      draft.temperature = action.payload;
      break;
    default:
      return state;
  }
});
