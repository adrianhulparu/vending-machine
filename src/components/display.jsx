import PropTypes from 'prop-types';
import React from 'react';
import lodash from 'lodash';
import { Flex } from 'rebass';

import ProductSlot from './product-slot';

const Display = props => (
  <Flex flexWrap='wrap' p={20} bg='#171717'>
    {lodash.map(props.slots, (details, code) => (
      <ProductSlot
        key={code}
        code={code}
        product={details.productName}
        color={details.color}
        amount={details.amount}
        price={details.price}
        isSelected={code === props.selection}
      />
    ))}
  </Flex>
);

Display.propTypes = {
  slots: PropTypes.shape(),
  selection: PropTypes.string
};

Display.defaultProps = {
  slots: {},
  selection: ''
};

export default Display;
