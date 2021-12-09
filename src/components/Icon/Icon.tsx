import React from 'react';

import styles from './Icon.module.scss';

interface IIconProps {
  link: string;
  image: string;
  imageAlt: string;
}

const Icon: React.FC<IIconProps> = ({ link, image, imageAlt }) => {
  return (
    <a className={styles.socialIcon} href={link} target='_blank' rel='noopener noreferrer'>
      <img src={image} alt={imageAlt} width='25' height='25' />
    </a>
  );
};

export default Icon;
