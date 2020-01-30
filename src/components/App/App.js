import React from 'react';
import Observer from '@researchgate/react-intersection-observer';

import MenuButton from '../MenuButton/MenuButton';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import ScrollMenu from '../ScrollMenu/ScrollMenu';
import ScrollMenuItem from '../ScrollMenuItem/ScrollMenuItem';
import Header from '../Header/Header';
import Section from '../Section/Section';
import ProjectRow from '../ProjectRow/ProjectRow';
import TimelineRow from '../TimelineRow/TimelineRow';
import Form from '../Form/Form';
import FormField from '../FormField/FormField';
import SocialList from '../SocialList/SocialList';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';

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
      <div className={styles.container}>
        <MenuButton
          isOpen={isMenuOpen}
          handleClick={this.handleMenuOpen} />

        <Menu isOpen={isMenuOpen}>
          <MenuItem
            label='home'
            link='#home'
            toggleMenu={this.handleMenuOpen} />

          <MenuItem
            label='projects'
            link='#projects'
            toggleMenu={this.handleMenuOpen} />

          <MenuItem
            label='work'
            link='#work'
            toggleMenu={this.handleMenuOpen} />

          <MenuItem
            label='contact'
            link='#contact'
            toggleMenu={this.handleMenuOpen} />
        </Menu>

        <ScrollMenu>
          <ScrollMenuItem
            link='#home'
            inView={currentSection === 'home'} />

          <ScrollMenuItem
            link='#projects'
            inView={currentSection === 'projects'} />

          <ScrollMenuItem
            link='#work'
            inView={currentSection === 'work'} />

          <ScrollMenuItem
            link='#contact'
            inView={currentSection === 'contact'} />
        </ScrollMenu>

        <Observer onChange={(e) => this.handleScroll('home', e)}>
          <Header skillsArray={[
            'full stack developer',
            'web designer',
            'front end developer',
            'technical consultant',
            'entrepreneur',
            'full stack developer']} />
        </Observer>

        <Observer onChange={(e) => this.handleScroll('projects', e)}>
          <Section
            id='projects'
            title='projects'>
            <ProjectRow
              index={1}
              title='First Project'
              themes={['web design', 'development']}
              image={require('../../assets/images/project01.jpg')}
              pageUrl='#' />

            <ProjectRow
              index={2}
              title='Second Project'
              description='This is my second project.'
              image={require('../../assets/images/project01.jpg')}
              pageUrl='#' />

            <ProjectRow
              index={3}
              title='Third Project'
              description='This is my third project.'
              image={require('../../assets/images/project01.jpg')}
              pageUrl='#' />
          </Section>
        </Observer>

        <Observer onChange={(e) => this.handleScroll('work', e)}>
          <Section
            id='work'
            title='work'>
            <TimelineRow
              date='today'
              image={require('../../assets/images/deloitte-digital-w.png')}
              imageAlt='Deloitte Digital'
              imageLink='https://www.deloittedigital.com.au/'
              link='#'
              description={`
                Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. 
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              `} />

            <TimelineRow
              date='2018'
              image={require('../../assets/images/spinify-w.png')}
              imageAlt='Spinify'
              imageLink='https://spinify.com/'
              link='#'
              description={`
                Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
                Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
                Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada.
              `} />

            <TimelineRow
              date='2016'
              image={require('../../assets/images/made-for-me-w.png')}
              imageAlt='Made for Me'
              link='#'
              description={`
                Donec rutrum congue leo eget malesuada. 
                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. 
                Cras ultricies ligula sed magna dictum porta.
              `} />

            <TimelineRow
              date='2015' />
          </Section>
        </Observer>

        <Observer onChange={(e) => this.handleScroll('contact', e)}>
          <Section
            id='contact'
            title='contact'>
            <Form>
              <FormField
                name='name'
                label='name'
                type='text'
                maxLength={255}
                isRequired={false} />

              <FormField
                name='email'
                label='email'
                type='email'
                maxLength={255}
                isRequired={true} />

              <FormField
                name='message'
                label='message'
                type='textarea'
                maxLength={255}
                isRequired={true} />

              <FormField
                name='submit'
                type='submit' />
            </Form>

            <SocialList>
              <SocialIcon
                link='//www.facebook.com/jpetty'
                image={require('../../assets/images/social-facebook.svg')}
                imageAlt='Facebook' />

              <SocialIcon
                link='//www.linkedin.com/in/j-petty'
                image={require('../../assets/images/social-linkedin.svg')}
                imageAlt='LinkedIn' />

              <SocialIcon
                link='//stackoverflow.com/users/5434910/jpetty'
                image={require('../../assets/images/social-stackoverflow.svg')}
                imageAlt='StackOverflow' />

            </SocialList>
          </Section>
        </Observer>

        <Footer
          link='#'
          name='James Petty' />
      </div>
    );
  }
}

export default App;
