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
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

import styles from './App.module.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  handleMenuOpen () {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
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
    const { isMenuOpen } = this.state;

    return (
      <Router>
        <div className={styles.container}>
          <MenuButton
            isOpen={isMenuOpen}
            handleClick={this.handleMenuOpen} />

          <Menu isOpen={isMenuOpen}>
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
              <Home />
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
