import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

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
    const { isOpen } = this.props;

    let navClasses = 'primaryNav fullHeight';

    if (isOpen) {
      navClasses += ' opened';
    }
    else if (!isOpen && hasOpened) {
      navClasses += ' closed';
    }

    return (
      <nav className={navClasses}>
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
