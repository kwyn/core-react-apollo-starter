import React from 'react';
import PropTypes from 'prop-types';
import { Input as BloomerInput } from 'bloomer';

const Input = ({ children, ...props }) => {
  return <BloomerInput {...props}>{children}</BloomerInput>;
};

Input.propTypes = {
  children: PropTypes.node
};

export default Input;
