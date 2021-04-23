import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './FormField.module.css';

const FormField = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const { handleChange, name, pattern } = props;

    // validate if field matches pattern
    if (e.target.value === '' || !pattern || !pattern.test(e.target.value)) {
      setValue(e.target.value);

      // send change to Form
      handleChange(e, name);
    }
  };

  const { name, label, type, isRequired, maxLength } = props;

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
            id={name}
            name={name}
            type={type}
            required={isRequired}
            rows={4}
            maxLength={maxLength}
            onChange={handleChange}
            value={value} />
        </div>
      );

    case 'text':
    case 'email':
    default:
      return (
        <div className={styles.fieldGroup}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            type={type}
            required={isRequired}
            maxLength={maxLength}
            onChange={handleChange}
            value={value} />
        </div>
      );
  }
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  maxLength: PropTypes.number,
  pattern: PropTypes.instanceOf(RegExp),
  handleChange: PropTypes.func
};

export default FormField;
