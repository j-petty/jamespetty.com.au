import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormField.module.css';

function FormField (props) {
  const { name, label, type, isRequired, maxLength } =  props;

  switch (type) {
    case 'submit':
      return (
        <div className={`${styles.fieldGroup} textCenter`}>
          <input
            name={name}
            type={type} />
        </div>
      );

    case 'textarea':
      return (
        <div className={styles.fieldGroup}>
          <label htmlFor={name}>{label}</label>
          <textarea
            name={name}
            type={type}
            required={isRequired}
            rows={4}
            maxLength={maxLength} />
        </div>
      );

    case 'text':
    case 'email':
    default:
      return (
        <div className={styles.fieldGroup}>
          <label htmlFor={name}>{label}</label>
          <input
            name={name}
            type={type}
            required={isRequired}
            maxLength={maxLength} />
        </div>
      );
  }
}

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  maxLength: PropTypes.number
};

export default FormField;
