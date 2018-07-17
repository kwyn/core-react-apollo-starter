import React from 'react';
import PropTypes from 'prop-types';
import { Notification as BloomerAlert } from 'bloomer';

const Alert = ({ children, color, ...props }) => {
  if (color === 'error') {
    color = 'danger';
  }
  return (
    <BloomerAlert {...props} color={color}>
      {children}
    </BloomerAlert>
  );
};

Alert.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

export default Alert;
