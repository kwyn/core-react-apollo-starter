import React from 'react';
import PropTypes from 'prop-types';
import { FieldBody as FormGroup, FieldLabel, Label } from 'bloomer';

const FormItem = ({ children, label, labelProps, ...props }) => {
  return (
    <FormGroup {...props}>
      {label && (
        <FieldLabel {...labelProps}>
          <Label isSize={labelProps.size || 'medium'}>{label}:&nbsp;</Label>
        </FieldLabel>
      )}
      {children}
    </FormGroup>
  );
};

FormItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  labelProps: PropTypes.object
};

export default FormItem;
