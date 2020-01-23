import React from 'react';

import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import MenuButton from '../MenuButton/MenuButton';
import Header from '../Header/Header';
import Section from '../Section/Section';
import ProjectRow from '../ProjectRow/ProjectRow';

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
          <ProjectRow
            title='First Project'
            description='This is my very first project.'
            image={require('../../assets/images/project01.jpg')} />

          <ProjectRow
            title='Second Project'
            description='This is my second project.'
            image={require('../../assets/images/project01.jpg')} />

          <ProjectRow
            title='Third Project'
            description='This is my third project.'
            image={require('../../assets/images/project01.jpg')} />
        </Section>
      </div>
    );
  }
}

export default App;
