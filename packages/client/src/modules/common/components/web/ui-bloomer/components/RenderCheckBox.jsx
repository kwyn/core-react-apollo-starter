import React from 'react';
import PropTypes from 'prop-types';
import { Field, Control, Help, Checkbox } from 'bloomer';

const RenderCheckBox = ({ input, label, type, meta: { touched, error } }) => {
  let color = 'normal';
  if (touched && error) {
    color = 'danger';
  }

  return (
    <Field>
      <Control>
        <Checkbox isColor={color} {...input} type={type}>
          {' '}
          {label}
        </Checkbox>
      </Control>
      {touched && (error && <Help isColor="danger">{error}</Help>)}
    </Field>
  );
};

RenderCheckBox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default RenderCheckBox;
