import React from 'react';
import PropTypes from 'prop-types';
import { PanelTab } from 'bloomer';

const ListItem = ({ children, active, ...props }) => {
  let isActive = active;
  return (
    <PanelTab isActive={isActive} {...props}>
      {children}
    </PanelTab>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.boolean
};

export default ListItem;
