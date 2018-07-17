import React from 'react';
import PropTypes from 'prop-types';
import { Button as BloomerButton } from 'bloomer';

const Button = ({ children, ...props }) => {
  return <BloomerButton {...props}>{children}</BloomerButton>;
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
