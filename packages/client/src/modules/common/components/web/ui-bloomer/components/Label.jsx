import React from 'react';
import PropTypes from 'prop-types';
import { Label as BloomerLabel } from 'bloomer';

const Label = ({ children, ...props }) => {
  return <BloomerLabel {...props}>{children}</BloomerLabel>;
};

Label.propTypes = {
  children: PropTypes.node
};

export default Label;
