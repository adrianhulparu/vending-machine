import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';
import lodash from "lodash";
import DataTable from 'react-data-table-component';

import styled from 'styled-components';
import { StyledNavButton } from "./vending-machine";

import SlotsSelector from "../selectors/slots";
import {slots as SlotsActions} from "../actions";

const maxQuantityPerSlot = 10;
const inventoryColumns = [
  {
    name: 'Slot #',
    selector: 'slot',
    sortable: true
  },
  {
    name: 'Product ID',
    selector: 'productId',
    sortable: true
  },
  {
    name: 'Product Name',
    selector: 'productName',
    sortable: true
  },
  {
    name: 'Quantity',
    selector: 'quantity',
    sortable: true
  },
  {
    name: 'Actions',
    selector: 'actions',
    ignoreRowClick: true
  }
];

const StyledBackButton = styled(StyledNavButton)`
  margin-top: 20px;
  margin-right: 20px;
`;

const Inventory = props => (
  <div>
    <StyledBackButton onClick={() => props.routerAction.push('/')}>
      Back to vending machine
    </StyledBackButton>
    <DataTable
      title="Inventory"
      columns={inventoryColumns}
      data={lodash.map(props.slots, (details, code) => ({
        slot: code,
        productId: details.product,
        productName: details.productName,
        quantity: details.amount || 'out of stock',
        actions: [
          (<button
            key='addProductButton'
            disabled={details.amount === maxQuantityPerSlot}
            onClick={() => props.slotsAction.addProduct(code)}>
            Add product
          </button>),
          (<button
            key='removeProductButton'
            disabled={!details.amount}
            onClick={() => props.slotsAction.removeProduct(code)}>
            Remove product
          </button>)
        ]
      }))}
    />
  </div>
);

export default withRouter(
  connect(
    state => ({
      slots: SlotsSelector.get(state)
    }),
    dispatch => ({
      routerAction: bindActionCreators({ push }, dispatch),
      slotsAction: bindActionCreators(SlotsActions, dispatch)
    })
  )(Inventory)
);
