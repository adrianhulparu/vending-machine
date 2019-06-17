import { handleActions } from 'redux-actions';
import { products } from '../actions.json';

export default handleActions(
  {
    [products.setPrice]: (state, action) => action.payload
  },
  null
);
