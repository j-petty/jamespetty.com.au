/*global localStorage */
import React from 'react';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MenuButton from '../MenuButton/MenuButton';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';

import styles from './App.module.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      colorMode: 'dark'
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.toggleColorMode = this.toggleColorMode.bind(this);
  }

  handleMenuOpen () {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  toggleColorMode () {
    let newColorMode = this.state.colorMode === 'dark' ? 'light' : 'dark';

    // update color mode in local storage
    localStorage.setItem(process.env.REACT_APP_COLOR_MODE_KEY, newColorMode);

    // update state
    this.setState({
      colorMode: newColorMode
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('ColorMode changed', newColorMode);
    }
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
    console.log('Welcome to my portfolio!\n\nPlease take a look around.\n\nUse the contact form to get in touch.');

    // startup Google Analytics
    this.initializeAnalytics();

    // retrieve previous color mode from local storage
    let initColorMode = localStorage.getItem(process.env.REACT_APP_COLOR_MODE_KEY);

    // set initial color mode
    if (initColorMode) {
      this.setState({
        colorMode: initColorMode
      });
    }
  }

  render () {
    const { isMenuOpen, colorMode } = this.state;

    return (
      <Router>
        <div className={`${styles.container} ${colorMode}`}>
          <MenuButton
            isOpen={isMenuOpen}
            handleClick={this.handleMenuOpen} />

          <Menu
            isOpen={isMenuOpen}
            toggleColorMode={this.toggleColorMode}>
            <MenuItem
              label='home'
              link='/#home'
              toggleMenu={this.handleMenuOpen} />

            <MenuItem
              label='projects'
              link='/#projects'
              toggleMenu={this.handleMenuOpen} />

            <MenuItem
              label='work'
              link='/#work'
              toggleMenu={this.handleMenuOpen} />

            <MenuItem
              label='contact'
              link='/#contact'
              toggleMenu={this.handleMenuOpen} />
          </Menu>

          <Switch>
            <Route exact path='/'>
              <Home colorMode={colorMode} />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
