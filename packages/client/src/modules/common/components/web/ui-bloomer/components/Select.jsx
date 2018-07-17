import React from 'react';
import PropTypes from 'prop-types';
import { Select as BloomerSelect } from 'bloomer';

const Select = ({ children, ...props }) => {
  return (
    <BloomerSelect {...props} type="select">
      {children}
    </BloomerSelect>
  );
};

Select.propTypes = {
  children: PropTypes.node
};

export default Select;
