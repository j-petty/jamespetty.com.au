import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScrollMenu.module.css';

class ScrollMenu extends React.Component {
  render () {
    return (
      <div className={styles.scrollMenu}>
        <ul className={styles.menuList}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

ScrollMenu.propTypes = {
  children: PropTypes.array.isRequired
};

export default ScrollMenu;
