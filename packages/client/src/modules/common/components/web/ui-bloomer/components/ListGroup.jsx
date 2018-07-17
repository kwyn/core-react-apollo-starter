import React from 'react';
import PropTypes from 'prop-types';
import { PanelTabs } from 'bloomer';

const ListGroup = ({ children, ...props }) => {
  return <PanelTabs {...props}>{children}</PanelTabs>;
};

ListGroup.propTypes = {
  children: PropTypes.node
};

export default ListGroup;
