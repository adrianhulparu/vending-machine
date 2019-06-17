import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import slots from './slots';
import products from './products';
import credits from './credits';
import screen from './screen';
import selection from './selection';

export default history =>
  combineReducers({
    router: connectRouter(history),
    slots,
    products,
    credits,
    screen,
    selection,
  });
