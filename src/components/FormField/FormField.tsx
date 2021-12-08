import React, { useState } from 'react';

import styles from './FormField.module.scss';

interface IFormFieldProps {
  name: string;
  label?: string;
  type: string;
  isRequired?: boolean;
  maxLength?: number;
  pattern?: RegExp;
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => void;
}

const FormField: React.FC<IFormFieldProps> = ({
  name,
  label,
  type,
  isRequired,
  maxLength,
  handleChange,
  pattern
}) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // validate if field matches pattern
    if (e.target.value === '' || !pattern || !pattern.test(e.target.value)) {
      setValue(e.target.value);

      // send change to Form
      if (handleChange) {
        handleChange(e, name);
      }
    }
  };

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
            required={isRequired}
            rows={4}
            maxLength={maxLength}
            onChange={onChange}
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
            onChange={onChange}
            value={value} />
        </div>
      );
  }
};

export default FormField;
