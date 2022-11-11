import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import styles from './BackButton.module.scss';

interface IBackButtonProps {
  link: string;
  className?: string;
}

const BackButton: React.FC<IBackButtonProps> = ({ link, className }) => {
  return (
    <a href={link} className={`${styles.button} ${className ? className : ''}`}>
      <BsArrowLeft />
      back to home
    </a>
  );
};

export default BackButton;
