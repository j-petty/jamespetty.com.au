import React from 'react';
import PropTypes from 'prop-types';

import styles from './SocialIcon.module.css';

const SocialIcon = (props) => {
  const { link, image, imageAlt } = props;

  return (
    <li className={styles.socialIcon}>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={image} alt={imageAlt} width='25' height='25' />
      </a>
    </li>
  );
};

SocialIcon.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string
};

export default SocialIcon;
