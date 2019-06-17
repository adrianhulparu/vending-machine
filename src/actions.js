import { createAction } from 'redux-actions';
import { reduce } from 'lodash';
import actions from './actions.json';

export const generate = name =>
  reduce(
    actions[name],
    (res, key, action) => ({
      ...res,
      [action]: createAction(key)
    }),
    {}
  );

export const slots = generate('slots');
export const products = generate('products');
export const credits = generate('credits');
export const screen = generate('screen');
export const selection = generate('selection');
