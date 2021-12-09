import React from 'react';

import styles from './MenuItem.module.scss';

interface IMenuItemProps {
  label: string;
  link: string;
  toggleMenu: () => void;
}

const MenuItem: React.FC<IMenuItemProps> = ({ label, link, toggleMenu }) => {
  return (
    <li className={styles.menuItem}>
      <a href={link} onClick={toggleMenu}>{label}</a>
    </li>
  );
};

export default MenuItem;
