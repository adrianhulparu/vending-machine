import { handleActions } from 'redux-actions';
import { selection } from '../actions.json';

export default handleActions({
  [selection.add]: (state, action) => state + action.payload.toString(),
  [selection.set]: (state, action) => action.payload.toString(),
  [selection.reset]: () => ''
}, '');
