import React from 'react';
import PropTypes from 'prop-types';

import styles from './SocialList.module.scss';

const SocialList = ({ children }) => {
  return (
    <ul className={styles.socialList}>
      {children.map((item, index) =>
        <li key={index}>
          {item}
        </li>
      )}
    </ul>
  );
};

SocialList.propTypes = {
  children: PropTypes.array.isRequired
};

export default SocialList;
