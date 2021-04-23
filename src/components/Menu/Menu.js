import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Menu.module.css';

import darkModeImg from '../../assets/images/icon-darkmode.svg';

const Menu = (props) => {
  const [hasOpened, setHasOpened] = useState(false);

  useEffect((prevProps) => {
    const { isOpen } = props;

    // capture update to IsOpen to prevent the Menu rendering on initial page load
    if (prevProps && prevProps.isOpen !== isOpen && isOpen && !hasOpened) {
      setHasOpened(isOpen);
    }
  });

  const { isOpen, toggleColorMode, children } = props;

  let extraClasses = null;

  if (isOpen) {
    extraClasses = 'opened';
  }
  else if (!isOpen && hasOpened) {
    extraClasses = 'closed';
  }

  return (
    <nav className={extraClasses}>
      <ul className={styles.menuList}>
        {children}
      </ul>

      <button
        className={styles.colorModeToggle}
        onClick={toggleColorMode}
        aria-label='Toggle Dark Mode'>
        <img
          src={darkModeImg}
          alt='Toggle Dark Mode' />
      </button>
    </nav>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.array,
  toggleColorMode: PropTypes.func
};

export default Menu;
