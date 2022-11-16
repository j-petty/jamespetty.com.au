import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import styles from './BackButton.module.scss';

interface IBackButtonProps {
  link: string;
  label: string;
  className?: string;
}

const BackButton: React.FC<IBackButtonProps> = ({ label, link, className }) => {
  return (
    <Link to={link} className={`${styles.button} ${className ? className : ''}`}>
      <BsArrowLeft />
      {label}
    </Link>
  );
};

export default BackButton;
