import React from 'react';
import PropTypes from 'prop-types';
import { CardHeaderTitle as BloomerCardTitle } from 'bloomer';

const CardTitle = ({ children, ...props }) => {
  return <BloomerCardTitle {...props}>{children}</BloomerCardTitle>;
};

CardTitle.propTypes = {
  children: PropTypes.node
};

export default CardTitle;
