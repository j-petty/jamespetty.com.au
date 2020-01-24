import React from 'react';
import Observer from '@researchgate/react-intersection-observer';

import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import MenuButton from '../MenuButton/MenuButton';
import ScrollMenu from '../ScrollMenu/ScrollMenu';
import ScrollMenuItem from '../ScrollMenuItem/ScrollMenuItem';
import Header from '../Header/Header';
import Section from '../Section/Section';
import ProjectRow from '../ProjectRow/ProjectRow';
import TimelineRow from '../TimelineRow/TimelineRow';

import styles from './App.module.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      currentSection: null
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  handleMenuOpen () {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  handleScroll (senderLocation, { isIntersecting }) {
    if (!isIntersecting) {
      return;
    }

    // update state to reference the currently intersected view
    this.setState({
      currentSection: senderLocation
    });
  }

  render () {
    const { isMenuOpen, currentSection } = this.state;

    return (
      <div>
        <MenuButton
          isOpen={isMenuOpen}
          handleClick={this.handleMenuOpen} />

        <Menu isOpen={isMenuOpen}>
          <MenuItem label='projects' />
          <MenuItem label='work' />
          <MenuItem label='contact' />
        </Menu>

        <ScrollMenu>
          <ScrollMenuItem
            link='home'
            inView={currentSection === 'home'} />

          <ScrollMenuItem
            link='projects'
            inView={currentSection === 'projects'} />

          <ScrollMenuItem
            link='work'
            inView={currentSection === 'work'} />

          <ScrollMenuItem
            link='contact'
            inView={currentSection === 'contact'} />
        </ScrollMenu>

        <Observer onChange={(e) => this.handleScroll('home', e)}>
          <Header inView={currentSection === 'home'} />
        </Observer>

        <Observer onChange={(e) => this.handleScroll('projects', e)}>
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
        </Observer>

        <Observer onChange={(e) => this.handleScroll('work', e)}>
          <Section
            id='work'
            title='work'>
            <TimelineRow
              date='today'
              title='Timeline 01'
              description='This is the latest thing on my timeline' />

            <TimelineRow
              date='2018'
              title='Timeline 02'
              description='This is the second thing on my timeline' />

            <TimelineRow
              date='2016'
              title='Timeline 03'
              description='This is the final thing on my timeline' />
          </Section>
        </Observer>
      </div>
    );
  }
}

export default App;
