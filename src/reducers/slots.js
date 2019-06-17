import { handleActions } from 'redux-actions';
import { slots } from '../actions.json';

export default handleActions(
  {
    [slots.removeProduct]: (state, action) => ({
      ...state,
      [action.payload]: {
        ...state[action.payload],
        amount: state[action.payload].amount - 1
      }
    }),
    [slots.addProduct]: (state, action) => ({
      ...state,
      [action.payload]: {
        ...state[action.payload],
        amount: state[action.payload].amount + 1
      }
    })
  },
  {}
);
