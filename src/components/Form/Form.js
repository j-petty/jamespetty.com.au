import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import styles from './Form.module.css';

class Form  extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      formData: {}
    };

    this.handleFieldChanged = this.handleFieldChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChanged (e, fieldName) {
    if (!e || !e.target || !fieldName) {
      return;
    }
    e.persist();

    let formData = this.state.formData || {};

    // URI encode value
    formData[fieldName] = encodeURIComponent(e.target.value);

    this.setState({
      formData: formData
    });
  }

  async handleSubmit (e) {
    e.preventDefault();

    const { action } = this.props;
    const { formData } = this.state;

    let requestUrl = `https://${process.env.REACT_APP_DOMAIN}/${action}`;

    if (process.env.NODE_ENV !== 'production') {
      console.log('SENT', requestUrl, formData);
    }

    try {
      let response = await axios({
        method: 'post',
        url: requestUrl,
        headers: { 'content-type': 'application/json' },
        data: formData
      });

      if (process.env.NODE_ENV !== 'production') {
        console.log('RESPONSE', requestUrl, response);
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  render () {
    const { children } = this.props;

    return (
      <form
        className={styles.formContainer}
        onSubmit={this.handleSubmit}
        onKeyDown={(e) => e.key !== 'Enter'}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { handleChange: this.handleFieldChanged })
        )}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.array.isRequired,
  action: PropTypes.string
};

export default Form;
