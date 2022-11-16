import React, { useState, useEffect, useContext } from 'react';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

import Cursor from 'components/Cursor/Cursor';
import MenuButton from 'components/MenuButton/MenuButton';
import Menu from 'components/Menu/Menu';
import MenuItem from 'components/MenuItem/MenuItem';
import Loader from 'components/Loader/Loader';

import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';

import MouseContextProvider from 'contexts/MouseContext';
import { ColourContext } from 'contexts/ColourContext';
import { ContentContext } from 'contexts/ContentContext';

import styles from './App.module.scss';
import ProjectDetails from 'pages/ProjectDetails/ProjectDetails';

const App: React.FC = () => {
  const { colourMode } = useContext(ColourContext);
  const { isLoading } = useContext(ContentContext);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`
Welcome to my portfolio!\n\n
Built with React using TypeScript, no themes or templates; integrated with Contentful as a headless CMS.\n\n
Take a look around! Use the contact form to get in touch and let me know what you think.
    `);

    // Startup Google Analytics
    initializeAnalytics();
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const initializeAnalytics = () => {
    if (!process.env.REACT_APP_ANALYTICS_TRACKING_ID) {
      return;
    }

    ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TRACKING_ID);

    // Filter pages by environment
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview('/');
    }
    else {
      ReactGA.pageview(`/${process.env.NODE_ENV}`);
    }
  };

  if (isLoading) {
    return (
      <div className='loaderContainer'>
        <Loader />
      </div>
    );
  }

  // NOTE: mouse context provider can't be rendered before the page content is loaded
  return (
    <Router>
      <MouseContextProvider>
        <div className={`${styles.container} ${colourMode}`}>
          <MenuButton
            isOpen={isMenuOpen}
            handleClick={handleMenuOpen} />

          <Menu
            isOpen={isMenuOpen}>
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
              <Home />
            </Route>

            <Route exact path='/work/:employmentId/project/:projectId'>
              <ProjectDetails />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>

          {/* Cursor should be last element added to page */}
          <Cursor />
        </div>
      </MouseContextProvider>
    </Router>
  );
};

export default App;
