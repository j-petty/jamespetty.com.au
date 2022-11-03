import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

import Cursor from 'components/Cursor/Cursor';
import MenuButton from 'components/MenuButton/MenuButton';
import Menu from 'components/Menu/Menu';
import MenuItem from 'components/MenuItem/MenuItem';

import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [colorMode, setColorMode] = useState<string>('dark');

  // componentDidMount
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Welcome to my portfolio!\n\nPlease take a look around.\n\nUse the contact form to get in touch.');

    // startup Google Analytics
    initializeAnalytics();

    // retrieve previous color mode from local storage
    const initColorMode = localStorage.getItem(process.env.REACT_APP_COLOR_MODE_KEY || '');

    // set initial color mode
    if (initColorMode) {
      setColorMode(initColorMode);
    }
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleColorMode = () => {
    const newColorMode = colorMode === 'dark' ? 'light' : 'dark';

    // update color mode in local storage
    localStorage.setItem(process.env.REACT_APP_COLOR_MODE_KEY || '', newColorMode);

    // update state
    setColorMode(newColorMode);
  };

  const initializeAnalytics = () => {
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
  };

  return (
    <Router>
      <div className={`${styles.container} ${colorMode}`}>
        <MenuButton
          isOpen={isMenuOpen}
          handleClick={handleMenuOpen} />

        <Menu
          isOpen={isMenuOpen}
          toggleColorMode={toggleColorMode}>
          <MenuItem
            label='home'
            link='/#home'
            toggleMenu={handleMenuOpen} />

          <MenuItem
            label='projects'
            link='/#projects'
            toggleMenu={handleMenuOpen} />

          <MenuItem
            label='work'
            link='/#work'
            toggleMenu={handleMenuOpen} />

          <MenuItem
            label='contact'
            link='/#contact'
            toggleMenu={handleMenuOpen} />
        </Menu>

        <Switch>
          <Route exact path='/'>
            <Home
              colorMode={colorMode} />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>

        {/* Cursor should be last element added to page */}
        <Cursor />
      </div>
    </Router>
  );
};

export default App;
