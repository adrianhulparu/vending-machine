import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import Note from './note';

const allowedNotes = [1, 5 ,10];

const ResetButton = styled(props => <Box {...props} width={1} mb={10}/>)`
  text-transform: uppercase;
  border: 2px solid #5535db;
  color: #5535db;
  height: 40px;
  border-radius: 6px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  &:hover {
    background: #5535db;
    color: #ffffff;
    cursor: pointer;
  }
`;

const MoneySlot = props => (
  <Flex justifyContent="space-between" flexWrap="wrap" width={220}>
    {allowedNotes.map(amount =>
      <Note
        key={amount}
        amount={amount}
        onClick={() => props.onCreditAdd(amount)}
      />
    )}
    <ResetButton onClick={() => props.onCreditReset()}>change</ResetButton>
  </Flex>
);

MoneySlot.propTypes = {
  onCreditAdd: PropTypes.func.isRequired,
  onCreditReset: PropTypes.func.isRequired
};

export default MoneySlot;
