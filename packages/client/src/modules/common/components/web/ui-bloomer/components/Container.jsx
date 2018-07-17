import React from 'react';
import PropTypes from 'prop-types';
import { Container as BloomerContainer } from 'bloomer';

const Container = ({ children, ...props }) => {
  return <BloomerContainer {...props}>{children}</BloomerContainer>;
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
