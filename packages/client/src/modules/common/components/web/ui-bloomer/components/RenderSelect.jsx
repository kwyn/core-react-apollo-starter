import React from 'react';
import PropTypes from 'prop-types';
import { Field, Control, Help, Input, Label } from 'bloomer';

const RenderField = ({ input, label, type, children, meta: { touched, error } }) => {
  let color = 'normal';
  if (touched && error) {
    color = 'danger';
  }

  return (
    <Field color={color}>
      {label && <Label>{label}</Label>}
      <Control>
        <Input {...input} type={type}>
          {children}
        </Input>
        {touched && (error && <Help isColor="danger">{error}</Help>)}
      </Control>
    </Field>
  );
};

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.node
};

export default RenderField;
