import React from 'react';

import styles from './ScrollMenu.module.scss';

const ScrollMenu: React.FC = ({ children}) => {
  return (
    <ul className={styles.scrollMenu}>
      {children}
    </ul>
  );
};

export default ScrollMenu;
