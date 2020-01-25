import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

function Form (props) {
  return (
    <form className={styles.formContainer}>
      {props.children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.array.isRequired
};

export default Form;
