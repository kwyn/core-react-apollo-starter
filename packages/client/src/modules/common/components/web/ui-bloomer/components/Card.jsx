import React from 'react';
import PropTypes from 'prop-types';
import { Card as BloomerCard } from 'bloomer';

const Card = ({ children, ...props }) => {
  return <BloomerCard {...props}>{children}</BloomerCard>;
};

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
