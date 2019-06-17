import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';

const StyledScreen = styled(props =>
  <Flex
    {...props}
    width={220}
    my={10}
    flexDirection="column"
    alignItems="stretch"
  />)`
  height: 140px;
  border: 2px solid #171717;
  border-radius: 6px;
`;

const StyledMessage = styled(props => <Box {...props} flex={1} p={10}/>)`
  display: block;
  font-weight: bold;
  font-size: ${props => props.type === 'selection' ? '48px' : '24px'};
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: ${props => props.type === 'error' ? 'red' : '#171717'};
`;

const StyledCredits = styled(props => <Box {...props}/>)`
  background: #171717;
  padding-left: 8px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  font-weight: bold; 
  font-size: 14px;
`;


const Screen = props => (
  <StyledScreen>
    <StyledCredits>
      {`Credits: ${props.credits} ${props.credits !== 1 ? 'squids' : 'squid'}`}
    </StyledCredits>
    <StyledMessage type={props.type}>
      {props.message}
    </StyledMessage>
    {props.type === 'product' && (
      <Text textAlign='center' mb={10}>selection: {props.selection}</Text>
    )}
  </StyledScreen>
);

Screen.propTypes = {
  credits: PropTypes.number,
  message: PropTypes.string,
  type: PropTypes.oneOf(['error', 'credit', 'selection', 'product', 'info']),
  selection: PropTypes.string
};

Screen.defaultProps = {
  credits: 0,
  message: 'Please add credit',
  type: 'info',
  selection: ''
};

export default Screen;
