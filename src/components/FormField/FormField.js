import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormField.module.css';

class FormField  extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const { handleChange, name, pattern } = this.props;

    // validate if field matches pattern
    if (e.target.value === '' || !pattern || !pattern.test(e.target.value)) {
      this.setState({
        value: e.target.value
      });

      // send change to Form
      handleChange(e, name);
    }
  }

  render () {
    const { name, label, type, isRequired, maxLength } = this.props;

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
              maxLength={maxLength}
              onChange={this.handleChange}
              value={this.state.value} />
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
              maxLength={maxLength}
              onChange={this.handleChange}
              value={this.state.value} />
          </div>
        );
    }
  }
}

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
