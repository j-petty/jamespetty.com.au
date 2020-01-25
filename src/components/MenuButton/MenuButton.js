import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuButton.module.css';

function MenuButton (props) {
  const { isOpen, handleClick } = props;

  return (
    <button
      className={isOpen ? `${styles.navButton} ${styles.active}` : `${styles.navButton}`}
      onClick={handleClick
        ? handleClick.bind(this)
        : this.handleClick.bind(this)}>
      <span />
      <span />
    </button>
  );
}

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default MenuButton;
