import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuItem.module.css';

const MenuItem = (props) => {
  const { label, link, toggleMenu } = props;

  return (
    <li className={styles.menuItem}>
      <a href={link} onClick={toggleMenu}>{label}</a>
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  toggleMenu: PropTypes.func
};

export default MenuItem;
