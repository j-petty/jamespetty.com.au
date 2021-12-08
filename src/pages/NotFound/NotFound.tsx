import React from 'react';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <main className={styles.notFound}>
      <h1>Nothing to see here.</h1>
      <p><a className='simpleLink' href='/'>Return to safety</a></p>
    </main>
  );
};

export default NotFound;
