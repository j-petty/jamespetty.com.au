import React from 'react';
import PropTypes from 'prop-types';

import styles from './SocialList.module.css';

const SocialList = (props) => {
  return (
    <ul className={styles.socialList}>
      {props.children}
    </ul>
  );
};

SocialList.propTypes = {
  children: PropTypes.array.isRequired
};

export default SocialList;
