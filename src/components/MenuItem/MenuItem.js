import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuItem.module.css';

class MenuItem extends React.Component {
  render () {
    const { label, link } = this.props;

    return (
      <li className={styles.menuItem}>
        <a href={link}>{label}</a>
      </li>
    );
  }
}

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string
};

export default MenuItem;
