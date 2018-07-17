import React from 'react';
import PropTypes from 'prop-types';
import { Field, Control, Help, Input, Label } from 'bloomer';

const RenderField = ({ input, label, type, meta: { touched, error }, children, placeholder }) => {
  let valid = true;
  if (touched && error) {
    valid = false;
  }

  return (
    <Field>
      {label && <Label>{label}</Label>}
      <Control>
        <Input {...input} placeholder={label || placeholder} type={type} invalid={!valid ? true : undefined}>
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
  placeholder: PropTypes.string,
  children: PropTypes.array
};

export default RenderField;
