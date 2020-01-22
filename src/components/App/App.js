import React from 'react';

import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import MenuButton from '../MenuButton/MenuButton';
import Header from '../Header/Header';
import Section from '../Section/Section';

import styles from './App.module.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false
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
          <MenuItem label="projects" />
          <MenuItem label="work" />
          <MenuItem label="contact" />
        </Menu>

        <Header />

        <Section
          id='projects'
          title='projects'>
          <div>test 123</div>
        </Section>
      </div>
    );
  }
}

export default App;
