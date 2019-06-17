import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';

import './index.css';
import VendingMachine from './containers/vending-machine';
import Inventory from './containers/inventory';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} render={VendingMachine} />
        <Route exact path={process.env.PUBLIC_URL + '/inventory'} render={Inventory} />
        <Route render={() => <div>Looks like you've got lost! :(</div>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
