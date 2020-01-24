import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem';

import styles from './Menu.module.css';

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
    const { isOpen, items, toggleMenu } = this.props;

    let extraClasses = '';

    if (isOpen) {
      extraClasses = 'opened';
    }
    else if (!isOpen && hasOpened) {
      extraClasses = 'closed';
    }

    return (
      <nav className={`primaryNav fullHeight ${extraClasses}`}>
        <ul className={styles.menuList}>
          {/*this.props.children*/}
          {items && items.map((item) =>
            <MenuItem
              key={item}
              label={item}
              link={item}
              toggleMenu={toggleMenu} />
          )}
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
  items: PropTypes.array,
  toggleMenu: PropTypes.func
};

export default Menu;
