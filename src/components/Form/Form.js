import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

class Form extends React.Component {
  render () {
    return (
      <form className={styles.formContainer}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.array.isRequired
};

export default Form;
