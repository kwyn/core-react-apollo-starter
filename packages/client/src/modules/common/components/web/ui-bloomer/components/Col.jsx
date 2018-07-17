import React from 'react';
import PropTypes from 'prop-types';
import { Column as BloomerCol } from 'bloomer';

const Col = ({ children, ...props }) => {
  return <BloomerCol {...props}>{children}</BloomerCol>;
};

Col.propTypes = {
  children: PropTypes.node
};

export default Col;
