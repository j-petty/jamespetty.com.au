import React, { ReactElement } from 'react';

import styles from './Icon.module.scss';

interface IIconProps {
  link: string;
  image: string | ReactElement;
  imageAlt: string;
  style?: any;
  title?: string;
  onClick?: () => void;
}

const Icon: React.FC<IIconProps> = ({ link, image, imageAlt, ...props }) => {
  return (
    <a
      className={styles.icon}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      {...props}>
      {typeof image === 'string'
        ? <img src={image} alt={imageAlt} width='25' height='25' />
        : image
      }
    </a>
  );
};

export default Icon;
