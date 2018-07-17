import React from 'react';
import PropTypes from 'prop-types';
import { Content as BloomerCardText } from 'bloomer';

const CardText = ({ children, ...props }) => {
  return <BloomerCardText {...props}>{children}</BloomerCardText>;
};

CardText.propTypes = {
  children: PropTypes.node
};

export default CardText;
