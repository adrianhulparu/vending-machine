import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import reducers from './reducers';

const initialState = {
  credits: 0,
  selection: '',
  screen: {
    message: 'Welcome!',
    type: 'info'
  },
  products: {
    'product1': {
      name: 'Apple',
      price: 1
    },
    'product2': {
      name: 'Avocado',
      price: 5
    },
    'product3': {
      name: 'Kiwi',
      price: 3
    },
    'product4': {
      name: 'Mango',
      price: 1
    },
    'product5': {
      name: 'Orange',
      price: 12
    },
    'product6': {
      name: 'Banana',
      price: 8
    }
  },
  slots: {
    '10': {
      product: 'product1',
      amount: 1
    },
    '19': {
      product: 'product1',
      amount: 4
    },
    '23': {
      product: 'product3',
      amount: 4
    },
    '27': {
      product: 'product2',
      amount: 4
    },
    '28': {
      product: 'product6',
      amount: 6
    },
    '30': {
      product: 'product6',
      amount: 5
    },
    '36': {
      product: 'product4',
      amount: 4
    },
    '38': {
      product: 'product5',
      amount: 4
    },
    '41': {
      product: 'product6',
      amount: 4
    },
    '46': {
      product: 'product4',
      amount: 4
    },
    '44': {
      product: 'product5',
      amount: 4
    },
    '58': {
      product: 'product6',
      amount: 4
    },
    '61': {
      product: 'product4',
      amount: 0
    },
    '62': {
      product: 'product6',
      amount: 4
    },
    '66': {
      product: 'product6',
      amount: 4
    },
    '73': {
      product: 'product6',
      amount: 4
    },
    '76': {
      product: 'product4',
      amount: 4
    },
    '84': {
      product: 'product5',
      amount: 4
    },
    '85': {
      product: 'product6',
      amount: 4
    },
    '86': {
      product: 'product5',
      amount: 4
    },
    '87': {
      product: 'product1',
      amount: 4
    },
    '89': {
      product: 'product6',
      amount: 4
    },
    '90': {
      product: 'product6',
      amount: 4
    },
    '91': {
      product: 'product6',
      amount: 4
    }
  }
};

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers(history),
  initialState,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

export const { dispatch } = store;
