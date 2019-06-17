import { handleActions } from 'redux-actions';
import { credits } from '../actions.json';

export default handleActions(
  {
    [credits.add]: (state, action) => state + action.payload,
    [credits.remove]: (state, action) => state - action.payload,
    [credits.reset]: (state, action) => 0,
  },
  0
);
