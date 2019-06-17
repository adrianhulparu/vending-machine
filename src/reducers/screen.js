import { handleActions } from 'redux-actions';
import { screen } from '../actions.json';

export default handleActions({
  [screen.set]: (state, action) => action.payload,
  [screen.clear]: () => ({})
}, {});
