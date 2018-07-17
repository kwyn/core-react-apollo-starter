import React from 'react';
import PropTypes from 'prop-types';
import { Container as BloomerRow } from 'bloomer';

const Row = ({ children, ...props }) => {
  return <BloomerRow {...props}>{children}</BloomerRow>;
};

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
