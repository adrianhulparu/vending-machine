import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

import SquidImg from '../images/squid.jpg';

const StyledNote = styled(props => <Box {...props} width={1} mb={10}/>)`
  height: 40px;
  position: relative;
  color: #ffffff;
  font-weight: bold;
  font-size: 28px;
  border: 2px #12132d solid;
  color: #12132d;
  border-radius: 6px;
  padding-right: 30px;
  text-align: center;
  &:hover {
    background: #12132d;
    color: #ffffff;
    cursor: pointer;
  }
`;

const StyledSquidImg = styled.img`
  max-height: 100%;
  border-radius: 50% 0 0 50%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
`;

const Note = props => (
  <StyledNote {...props}>
    {props.amount} {props.amount !== 1 ? 'squids' : 'squid'}
    <StyledSquidImg src={SquidImg} alt='squid'/>
  </StyledNote>
);

Note.propTypes = {
  amount: PropTypes.number.isRequired
};

export default Note;
