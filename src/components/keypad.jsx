import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const StyledKeypad = styled(props =>
  <Flex
    {...props}
    width={220}
    flexWrap="wrap"
    justifyContent="space-between"
    p={10}
  />)`
  height: 290px;
  align-content: space-between;
  border: 2px solid #171717;
  border-radius: 6px;
`;

const StyledButton = styled(props => <Box {...props} width={1/3}/>)`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border: 2px solid #171717;
  color: #171717;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background: #171717;
    color: #ffffff;
  }
`;

const SubmitButton = styled(StyledButton)`
  border-color: #5535db;
  color: #5535db;
  &:hover {
    background: #5535db;
  } 
`;

const Keypad = props => (
  <StyledKeypad>
    {[...Array(9).keys()].map(digit =>
      <StyledButton onClick={() => props.onDigitClick(digit + 1)} key={digit + 1}>
        {digit + 1}
      </StyledButton>
    )}
    <StyledButton onClick={() => props.onClearClick()}>C</StyledButton>
    <StyledButton onClick={() => props.onDigitClick(0)}>0</StyledButton>
    <SubmitButton onClick={() => props.onProductSelected()}>E</SubmitButton>
  </StyledKeypad>
);

Keypad.propTypes = {
  onDigitClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  onProductSelected: PropTypes.func.isRequired
};

export default Keypad;
