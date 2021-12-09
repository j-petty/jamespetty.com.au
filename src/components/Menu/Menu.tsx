import React from 'react';

import styles from './Menu.module.scss';

import darkModeImg from '../../assets/images/icon-darkmode.svg';

interface IMenuProps {
  isOpen: boolean;
  toggleColorMode: () => void;
}

const Menu: React.FC<IMenuProps> = ({ isOpen, toggleColorMode, children }) => {
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
        onClick={() => toggleColorMode()}
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
