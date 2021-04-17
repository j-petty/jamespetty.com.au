import React from 'react';
import PropTypes from 'prop-types';

import styles from './Menu.module.css';

import darkModeImg from '../../assets/images/icon-darkmode.svg';

class Menu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hasOpened: false
    };
  }

  componentDidUpdate (prevProps) {
    const { hasOpened } = this.state;
    const { isOpen } = this.props;

    // capture update to IsOpen to prevent the Menu rendering on initial page load
    if (prevProps.isOpen !== isOpen && isOpen && !hasOpened) {
      this.setState({
        hasOpened: isOpen
      });
    }
  }

  render () {
    const { hasOpened } = this.state;
    const { isOpen, toggleColorMode, children } = this.props;

    let extraClasses = null;

    if (isOpen) {
      extraClasses = 'opened';
    }
    else if (!isOpen && hasOpened) {
      extraClasses = 'closed';
    }

    return (
      <nav className={extraClasses}>
        <ul className={styles.menuList}>
          {children}
        </ul>

        <button
          className={styles.colorModeToggle}
          onClick={toggleColorMode}
          aria-label='Toggle Dark Mode'>
          <img
            src={darkModeImg}
            alt='Toggle Dark Mode' />
        </button>
      </nav>
    );
  }
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.array,
  toggleColorMode: PropTypes.func
};

export default Menu;
