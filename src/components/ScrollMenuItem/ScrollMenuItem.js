import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScrollMenuItem.module.css';

function ScrollMenuItem (props) {
  const { link, inView } = props;

  return (
    <li className={inView ? `${styles.menuItem} ${styles.active}` : styles.menuItem}>
      <a href={link}><span></span></a>
    </li>
  );
}

ScrollMenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  inView: PropTypes.bool
};

export default ScrollMenuItem;
