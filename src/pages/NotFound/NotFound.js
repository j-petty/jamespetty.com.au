import React from 'react';
import PropTypes from 'prop-types';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <h1>Nothing to see here.</h1>
      <p><a className='simpleLink' href='/'>Return to safety</a></p>
    </main>
  );
};

NotFound.propTypes = {
  skillsArray: PropTypes.array
};

export default NotFound;
