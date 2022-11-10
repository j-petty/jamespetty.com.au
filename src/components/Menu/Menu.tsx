import React, { useContext } from 'react';

import { ColourContext } from 'contexts/ColourContext';

import styles from './Menu.module.scss';

import darkModeImg from 'assets/images/icon-darkmode.svg';

interface IMenuProps {
  isOpen: boolean;
}

const Menu: React.FC<IMenuProps> = ({ isOpen, children }) => {
  const { toggleColourMode } = useContext(ColourContext);

  let extraClasses = '';

  if (isOpen) {
    extraClasses = 'opened';
  }

  return (
    <nav className={extraClasses}>
      <ul className={styles.menuList}>
        {children}
      </ul>

      <button
        className={styles.colorModeToggle}
        onClick={() => toggleColourMode()}
        aria-label='Toggle Dark Mode'>
        <img
          src={darkModeImg}
          alt='Toggle Dark Mode'
          width='20'
          height='20' />
      </button>
    </nav>
  );
};

export default Menu;
