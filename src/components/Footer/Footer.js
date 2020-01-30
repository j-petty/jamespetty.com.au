import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.css';

function Footer (props) {
  const { link, name } = props;

  return (
    <footer>
      <span className={styles.copy}>Created by <a href={link}>{name}</a>.</span>
    </footer>
  );
}

Footer.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string
};

export default Footer;
