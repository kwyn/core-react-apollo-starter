import React from 'react';
import PropTypes from 'prop-types';
import { CardContent as BloomerCardBody } from 'bloomer';

const CardGroup = ({ children, ...props }) => {
  return <BloomerCardBody {...props}>{children}</BloomerCardBody>;
};

CardGroup.propTypes = {
  children: PropTypes.node
};

export default CardGroup;
