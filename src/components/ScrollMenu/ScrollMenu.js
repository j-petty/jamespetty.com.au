import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScrollMenu.module.scss';

const ScrollMenu = (props) =>{
  return (
    <ul className={styles.scrollMenu}>
      {props.children}
    </ul>
  );
};

ScrollMenu.propTypes = {
  children: PropTypes.array.isRequired
};

export default ScrollMenu;
