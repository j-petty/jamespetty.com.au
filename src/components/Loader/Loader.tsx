import React from 'react';

import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div>
      <div className={styles.loader}><div /><div /><div /><div /></div>
      <div className={styles.loaderText}>Loading, this won&apos;t take long.</div>
    </div>
  );
};

export default Loader;
