import { createSelector } from 'reselect';
import lodash from 'lodash';

const get = createSelector(
  state => state.products,
  state => state.slots,
  (products, slots) =>
    lodash.mapValues(slots, slot => ({
      ...slot,
      price: products[slot.product].price,
      productName: products[slot.product].name,
      color: products[slot.product].color
    })));

export default {
  get
};
