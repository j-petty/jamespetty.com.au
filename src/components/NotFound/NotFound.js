import React from 'react';
import PropTypes from 'prop-types';

import styles from './NotFound.module.css';

function NotFound () {
  return (
    <main className={styles.notFound}>
      <h1>Nothing to see here.</h1>
      <p>Return to <a className='simpleLink' href='/'>safety</a>.</p>
    </main>
  );
}

NotFound.propTypes = {
  skillsArray: PropTypes.array
};

export default NotFound;
