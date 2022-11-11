import React from 'react';

import BackButton from 'components/BackButton/BackButton';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <main className={styles.notFound}>
      <h1>Nothing to see here.</h1>
      <p><BackButton link='/' label='return to safety' /></p>
    </main>
  );
};

export default NotFound;
