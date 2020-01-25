import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScrollMenu.module.css';

class ScrollMenu extends React.Component {
  render () {
    return (
      <ul className={styles.scrollMenu}>
        {this.props.children}
      </ul>
    );
  }
}

ScrollMenu.propTypes = {
  children: PropTypes.array.isRequired
};

export default ScrollMenu;
