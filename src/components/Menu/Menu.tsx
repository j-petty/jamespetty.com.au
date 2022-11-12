import React, { useContext } from 'react';
import { CgDarkMode } from 'react-icons/cg';

import { ColourContext } from 'contexts/ColourContext';

import styles from './Menu.module.scss';

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
        <CgDarkMode />
      </button>
    </nav>
  );
};

export default Menu;
