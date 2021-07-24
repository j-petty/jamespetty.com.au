/*global localStorage */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Loader from '../Loader/Loader';

import styles from './Form.module.scss';

const Form = (props) => {
  const [formData, setFormData] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // componentDidMount
  useEffect(() => {
    // Disable submit if already done
    if (localStorage.getItem(process.env.REACT_APP_MAIL_KEY)) {
      setHasSubmitted(true);
    }
  }, []);

  const handleFieldChanged = (e, fieldName) => {
    if (!e || !e.target || !fieldName) {
      return;
    }
    e.persist();

    let data = formData || {};

    // URI encode value
    data[fieldName] = encodeURIComponent(e.target.value);

    // Update state
    setFormData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { action } = props;

    if (isSubmitting) {
      return;
    }

    let requestUrl = `https://${process.env.REACT_APP_DOMAIN}/${action}`;

    if (process.env.NODE_ENV !== 'production') {
      console.log('SENT', requestUrl, formData);
    }

    // Show loading indicator
    setIsSubmitting(true);
    setErrorMessage(null);

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
      // Update state values
      setHasSubmitted(_hasSubmitted);
      setErrorMessage(_errorMessage);
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return (
      <Loader />
    );
  }

  if (hasSubmitted) {
    return (
      <p className={`${styles.formContainer} textCenter`}>Thank&apos;s for reaching out. I&apos;ll get back to you shortly.</p>
    );
  }

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit}
      onKeyDown={(e) => e.key !== 'Enter'}>
      {errorMessage &&
        <p>{errorMessage}</p>
      }

      {React.Children.map(props.children, child =>
        React.cloneElement(child, { handleChange: handleFieldChanged })
      )}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  action: PropTypes.string
};

export default Form;
