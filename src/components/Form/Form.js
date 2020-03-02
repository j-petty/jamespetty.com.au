/*global localStorage */

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import styles from './Form.module.css';

class Form  extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      formData: {},
      hasSubmitted: false,
      isSubmitting: false,
      errorMessage: null
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
    const { formData, isSubmitting, hasSubmitted, errorMessage } = this.state;

    if (isSubmitting) {
      return;
    }

    let requestUrl = `https://${process.env.REACT_APP_DOMAIN}/${action}`;

    if (process.env.NODE_ENV !== 'production') {
      console.log('SENT', requestUrl, formData);
    }

    // show loading indicator
    this.setState({
      isSubmitting: true,
      errorMessage: null
    });

    let _hasSubmitted = hasSubmitted;
    let _errorMessage = errorMessage;

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

      if (response.status === 200 && response.data.success) {
        _hasSubmitted = true;
        localStorage.setItem(process.env.REACT_APP_MAIL_KEY, new Date().toISOString());
      }
    }
    catch (error) {
      console.error(error);
      _errorMessage = 'Something went wrong. Please try again.';
    }
    finally {
      this.setState({
        hasSubmitted: _hasSubmitted,
        errorMessage: _errorMessage,
        isSubmitting: false
      });
    }
  }

  componentDidMount () {
    if (localStorage.getItem(process.env.REACT_APP_MAIL_KEY)) {
      this.setState({
        hasSubmitted: true
      });
    }
  }

  render () {
    const { hasSubmitted, errorMessage } = this.state;
    const { children } = this.props;

    if (hasSubmitted) {
      return (
        <p className={`${styles.formContainer} textCenter`}>Thank&apos;s for reaching out. I&apos;ll get back to you shortly.</p>
      );
    }

    return (
      <form
        className={styles.formContainer}
        onSubmit={this.handleSubmit}
        onKeyDown={(e) => e.key !== 'Enter'}>
        {errorMessage &&
          <p>{errorMessage}</p>
        }

        {React.Children.map(children, child =>
          React.cloneElement(child, { handleChange: this.handleFieldChanged })
        )}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  action: PropTypes.string
};

export default Form;
