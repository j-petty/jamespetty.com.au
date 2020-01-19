import React from 'react';

import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import MenuButton from '../MenuButton/MenuButton';
import Header from '../Header/Header';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: true
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  handleMenuOpen () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    const { isOpen } = this.state;

    return (
      <div>
        <MenuButton
          isOpen={isOpen}
          handleClick={this.handleMenuOpen} />

        <Menu isOpen={isOpen}>
          <MenuItem
            label="test1"
            href="test" />
          <MenuItem label="test2" />
          <MenuItem label="test3" />
        </Menu>

        <Header />
      </div>
    );
  }
}

export default App;
