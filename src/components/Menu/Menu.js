import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

class Menu extends React.Component {
  render () {
    const { isOpen } = this.props;

    // don't render menu if it hasn't been opened
    if (!isOpen) {
      return null;
    }

    return (
      <nav className="primaryNav fullHeight">
        <ul className="menuList">
          {this.props.children}
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.array
};

export default Menu;
