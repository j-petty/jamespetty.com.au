import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

// NOTE: needs to be a React.Component to support Observer
class Header extends React.Component {
  render () {
    const { forwardedRef, skillsArray } = this.props;

    return (
      <header id='home' className='textCenter' ref={forwardedRef}>
        <h1>Hi I&apos;m James.</h1>

        <ul className={styles.skillLoop}>
          {skillsArray.map((skill, index) =>
            <li key={index}>{skill}</li>
          )}
        </ul>

        <a className={styles.nudge} href='/#projects'>see my work</a>
      </header>
    );
  }
}

Header.propTypes = {
  forwardedRef: PropTypes.object,
  skillsArray: PropTypes.array
};

export default Header;
