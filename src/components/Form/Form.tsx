import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from 'components/Loader/Loader';

import styles from './Form.module.scss';

interface IFormProps {
  action: string;
}

const Form: React.FC<IFormProps> = ({ action, children }) => {
  const [formData, setFormData] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // componentDidMount
  useEffect(() => {
    // Disable submit if already done
    if (localStorage.getItem(process.env.REACT_APP_MAIL_KEY || '')) {
      setHasSubmitted(true);
    }
  }, []);

  const handleFieldChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => {
    if (!e || !e.target || !fieldName) {
      return;
    }
    e.persist();

    const data: any = formData || {};

    // URI encode value
    data[fieldName] = encodeURIComponent(e.target.value);

    // Update state
    setFormData(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const requestUrl = `https://${process.env.REACT_APP_DOMAIN}/${action}`;

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.log('SENT', requestUrl, formData);
    }

    // Show loading indicator
    setIsSubmitting(true);
    setErrorMessage(null);

    let _hasSubmitted = hasSubmitted;
    let _errorMessage = errorMessage;

    try {
      const response = await axios({
        method: 'post',
        url: requestUrl,
        headers: { 'content-type': 'application/json' },
        data: formData
      });

      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.log('RESPONSE', requestUrl, response);
      }

      if (response.status === 200 && response.data.success) {
        _hasSubmitted = true;
        localStorage.setItem(process.env.REACT_APP_MAIL_KEY || '', new Date().toISOString());
      }
    }
    catch (error) {
      // eslint-disable-next-line no-console
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

      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement, { handleChange: handleFieldChanged })
      )}
    </form>
  );
};

export default Form;
