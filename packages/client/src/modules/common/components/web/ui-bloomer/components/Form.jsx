import React from 'react';
import PropTypes from 'prop-types';
import { Field as BloomerForm } from 'bloomer';

const Form = ({ children, layout, ...props }) => {
  let isHorizontal = false;
  if (layout === 'inline') {
    isHorizontal = true;
  }
  return (
    <BloomerForm {...props} isHorizontal={isHorizontal}>
      {children}
    </BloomerForm>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.string,
  type: PropTypes.string
};

export default Form;
