import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';

import SlotsSelector from '../selectors/slots';

import Display from '../components/display';
import Keypad from '../components/keypad';
import Screen from '../components/screen';
import MoneySlot from '../components/money-slot';

import {
  credits as CreditsActions,
  screen as ScreenActions,
  selection as SelectionActions,
  slots as SlotsActions,
} from '../actions';

import styled from 'styled-components';
import { Flex, Box } from 'rebass';

export const StyledNavButton = styled.button`
    float: right;
    margin-bottom: 20px;
  `;

const VendingMachine = (props) => {

  useEffect(() => {
    const computeScreenMessage = () => {
      if (!props.credits) {
        return props.screenAction.set({
          message: 'Please add credits',
          type: 'info'
        });
      }
      if (!props.selection) {
        return props.screenAction.set({
          message: 'Select your product',
          type: 'info'
        });
      }
    };

    if(!props.selection) {
      setTimeout(computeScreenMessage, 1500);
    }
  }, [props.selection, props.credits, props.screenAction]);

  const onDigitClick = digit => {
    let updatedSelection = props.selection + digit.toString();

    if (props.selection.length === 3) {
      updatedSelection = digit;
    }

    if (props.slots[updatedSelection]) {
      props.screenAction.set({
        message: `
          ${props.slots[updatedSelection].productName}:
          ${props.slots[updatedSelection].price} ${props.slots[updatedSelection].price === 1 ? 'squid' : 'squids'}
        `,
        type: 'product'
      });
    } else {
      props.screenAction.set({
        message: updatedSelection,
        type: 'selection'
      })
    }

    props.selectionAction.set(updatedSelection);
  };

  const onClearClick = () => {
    props.selectionAction.reset();
    props.screenAction.set({
      message: 'Select your product',
      type: 'info'
    });
  };

  const onProductSelected = () => {
    const selectedProduct = props.slots[props.selection];

    if (!selectedProduct) {
      props.screenAction.set({
        message: 'Unknown selection',
        type: 'error'
      });
      return props.selectionAction.reset();
    }

    if (!selectedProduct.amount) {
      props.screenAction.set({
        message: 'Out of stock',
        type: 'error'
      });
      return props.selectionAction.reset();
    }

    if (selectedProduct.price > props.credits) {
      props.screenAction.set({
        message: 'Not enough credits',
        type: 'error'
      });
    } else {
      props.slotsAction.removeProduct(props.selection);
      props.creditsAction.remove(selectedProduct.price);
      props.screenAction.set({
        message: 'Product delivered',
        type: 'info'
      });
    }
    return props.selectionAction.reset();
  };

  const onCreditAdd = (amount) => {
    props.creditsAction.add(amount);
    props.screenAction.set({
      message: `+ ${amount} ${amount !== 1 ? 'squids' : 'squid'}`,
      type: 'info'
    });
  };

  return (
    <Flex>
      <Box>
        <Display
          slots={props.slots}
          selection={props.selection}
        />
      </Box>
      <Box p={20}>
        <StyledNavButton onClick={() => props.routerAction.push('/inventory')}>
          Go to inventory
        </StyledNavButton>
        <MoneySlot
          onCreditAdd={onCreditAdd}
          onCreditReset={props.creditsAction.reset}
        />
        <Screen
          credits={props.credits}
          message={props.screen.message}
          type={props.screen.type}
          selection={props.selection}
        />
        <Keypad
          onDigitClick={onDigitClick}
          onClearClick={onClearClick}
          onProductSelected={onProductSelected}
        />
      </Box>
    </Flex>
  );
};

export default withRouter(
  connect(
    state => ({
      slots: SlotsSelector.get(state),
      credits: state.credits,
      screen: state.screen,
      selection: state.selection
    }),
    dispatch => ({
      routerAction: bindActionCreators({ push }, dispatch),
      creditsAction: bindActionCreators(CreditsActions, dispatch),
      screenAction: bindActionCreators(ScreenActions, dispatch),
      selectionAction: bindActionCreators(SelectionActions, dispatch),
      slotsAction: bindActionCreators(SlotsActions, dispatch)
    })
  )(VendingMachine)
);
