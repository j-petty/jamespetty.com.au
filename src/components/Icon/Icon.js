import React from 'react';
import PropTypes from 'prop-types';

import styles from './Icon.module.scss';

const Icon = (props) => {
  const { link, image, imageAlt } = props;

  return (
    <a className={styles.socialIcon} href={link} target='_blank' rel='noopener noreferrer'>
      <img src={image} alt={imageAlt} width='25' height='25' />
    </a>
  );
};

Icon.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string
};

export default Icon;
