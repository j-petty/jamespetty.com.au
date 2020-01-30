import React from 'react';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import ReactGA from 'react-ga';

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

  initializeAnalytics () {
    if (!process.env.REACT_APP_ANALYTICS_TRACKING_ID) {
      return;
    }

    ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TRACKING_ID);

    // filter pages by environment
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview('/');
    }
    else {
      ReactGA.pageview(`/${process.env.NODE_ENV}`);
    }
  }

  componentDidMount () {
    // startup Google Analytics
    this.initializeAnalytics();
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
              title='Top Secret'
              themes={['AWS', 'ReactJS', 'Xamarin']}
              description="An entrepreneurial endeavor which I'm working towards turning into a startup business."
              image={require('../../assets/images/project01.jpg')}
              pageUrl='#' />

            <ProjectRow
              index={2}
              title='Whtspc Digital'
              themes={['WordPress', 'Web Design', 'ReactJs']}
              description="A digital design agency of which I'm a co-founder."
              image={require('../../assets/images/project02.jpg')}
              pageUrl='#' />

            <ProjectRow
              index={3}
              title='Personal Portfolio'
              themes={['ReactJS', 'Web Design']}
              description="The site you're looking at right now. I built it using ReactJS for a bit of fun."
              image={require('../../assets/images/project03.jpg')}
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
              imageLink='//www.deloittedigital.com.au/'
              link=''
              description={`
                As a Technical Consultant at Deloitte Digital, I've work in several different client environments.
                From small agile teams, through to large hybrid-agile programs - solving complex problems is BAU.
                Each project brings a new set skills to learn and a fresh set of challenges to overcome.
                My time at Deloitte Digital has certainly show me the value of being very dynamic but thorough.
              `} />

            <TimelineRow
              date='2018'
              image={require('../../assets/images/spinify-w.png')}
              imageAlt='Spinify'
              imageLink='//spinify.com/'
              link=''
              description={`
                Spinify is a gamification startup which focuses on helping businesses better engage their staff.
                At Spinify I was a critical member of a small but international agile development team.
                We worked at the forefront of industry best practices to ensure we we're delivering valuable releases timely and efficiently.
                The experience of coordinating software development activities across timezones gave me an appreciation of the possibilities of agile project management, when done properly.
              `} />

            <TimelineRow
              date='2016'
              image={require('../../assets/images/made-for-me-w.png')}
              imageAlt='Made for Me'
              link=''
              description={`
                What started as a internship at a 3D Printing startup soon turned into a part-time job whilst I studied at University.
                I worked as a Web Developer, responsible for designing, building and maintaining a Python based website and online 3D Print Quoting Tool.
                Working with unfamilar tools meant I had to teach myself new technologies and frameworks in a short timeframe to start delivering value.
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
