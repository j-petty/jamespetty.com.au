import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScrollMenuItem.module.css';

class ScrollMenuItem extends React.Component {
  render () {
    const { link, inView } = this.props;

    return (
      <li className={inView ? `${styles.menuItem} ${styles.active}` : styles.menuItem}>
        <a href={link}><span></span></a>
      </li>
    );
  }
}

ScrollMenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  inView: PropTypes.bool
};

export default ScrollMenuItem;
