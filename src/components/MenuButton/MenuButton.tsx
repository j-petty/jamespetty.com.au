import React from 'react';

import styles from './MenuButton.module.scss';

/**
 * IMenuButtonProps
 *
 * @param isOpen Whether the menu is open.
 * @param handleClick Handles menu click event.
 */
interface IMenuButtonProps {
  isOpen: boolean;
  handleClick: () => void;
}

const MenuButton: React.FC<IMenuButtonProps> = ({ isOpen, handleClick }) => {
  return (
    <button
      className={isOpen ? `${styles.navButton} ${styles.active}` : `${styles.navButton}`}
      onClick={handleClick}
      aria-label='Toggle Nav Menu'>
      <span />
      <span />
    </button>
  );
};

export default MenuButton;
