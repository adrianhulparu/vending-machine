import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';

const StyledCode = styled.div`
  font-weight: 800;
  font-size: 80px;
  color: ${props => props.isSelected ? '#ffffff' : '#13132d'};
`;

const StyledSlot = styled(props => <Box {...props}/>)`
  border: 5px solid #13132d;
  border-radius: 12px;
  position: relative;
  opacity: ${props => !props.amount ? 0.3 : 1}; 
  &:after {
    display: ${props => !props.amount ? 'flex' : 'none'};
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    font-weight: 800;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    content: 'Out of stock';
    background: rgba(23, 23, 23, 0.8);
  }
  ${props => props.isSelected && props.amount ? `
    border-width: 0px;
    box-shadow: 3px 3px 12px black;
    transform: scale(1.15);
    z-index: 2;` : ''
  }
`;

const ProductSlot = props => (
  <StyledSlot
    width={1/4}
    color='white'
    bg={'#5535db'}
    amount={props.amount}
    isSelected={props.isSelected}
  >
    <StyledCode isSelected={props.isSelected}>{props.code}</StyledCode>
    <Text px={10} fontSize={20} fontWeight={800}>{props.product}</Text>
    <Text px={10} my={10} textAlign='right'>
      Price: <strong>{props.price} {props.price !== 1 ? 'squids' : 'squid'}</strong>
    </Text>
  </StyledSlot>
);

ProductSlot.propTypes = {
  code: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isSelected: PropTypes.bool
};

ProductSlot.defaultProps = {
  isSelected: false
};

export default ProductSlot;
