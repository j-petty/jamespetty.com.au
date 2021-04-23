import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScrollMenuItem.module.css';

const ScrollMenuItem = (props) => {
  const { link, inView } = props;

  return (
    <li id={`scroll-${link}`} className={inView ? `${styles.menuItem} active` : styles.menuItem}>
      <a href={`/#${link}`} aria-label='Page Scroll'><span></span></a>
    </li>
  );
};

ScrollMenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  inView: PropTypes.bool
};

export default ScrollMenuItem;
