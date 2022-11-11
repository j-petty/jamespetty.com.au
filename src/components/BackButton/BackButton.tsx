import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import styles from './BackButton.module.scss';

interface IBackButtonProps {
  link: string;
  label: string;
  className?: string;
}

const BackButton: React.FC<IBackButtonProps> = ({ label, link, className }) => {
  return (
    <a href={link} className={`${styles.button} ${className ? className : ''}`}>
      <BsArrowLeft />
      {label}
    </a>
  );
};

export default BackButton;
