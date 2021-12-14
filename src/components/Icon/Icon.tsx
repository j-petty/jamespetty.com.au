import React from 'react';

import styles from './Icon.module.scss';

interface IIconProps {
  link: string;
  image: string;
  imageAlt: string;
  style?: any;
  title?: string;
}

const Icon: React.FC<IIconProps> = ({ link, image, imageAlt, ...props }) => {
  return (
    <a
      className={styles.socialIcon}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      {...props}>
      <img src={image} alt={imageAlt} width='25' height='25' />
    </a>
  );
};

export default Icon;
