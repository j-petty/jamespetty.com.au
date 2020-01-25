import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

class Header extends React.Component {
  render () {
    const { skillsArray } = this.props;

    return (
      <header id='home' className='fullHeight textCenter'>
        <h1>Hi I&apos;m James.</h1>

        <ul className={styles.skillLoop}>
          {skillsArray.map(skill =>
            <li key={skill}>{skill}</li>
          )}
        </ul>

        <a className={styles.nudge} href='#projects'>see my work</a>
      </header>
    );
  }
}

Header.propTypes = {
  skillsArray: PropTypes.array
};

export default Header;
