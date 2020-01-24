import React from 'react';
import TextLoop from 'react-text-loop';
import { Link } from 'react-scroll';

import styles from './Header.module.css';

class Header extends React.Component {
  render () {
    const skillsArray = ['full stack developer', 'web designer', 'front end developer', 'technical consultant', 'entrepreneur'];

    return (
      <header id='home' className={`${styles.mainHeader} fullHeight`}>
        <h1 className={styles.mainTitle}>Hi I&apos;m James.</h1>

        <div className={styles.subTitle}>
          <TextLoop
            delay={500}
            interval={2500}
            mask={true}>
            {skillsArray.map(skill =>
              <span key={skill}>{skill}</span>
            )}
          </TextLoop>
        </div>

        <Link
          className={styles.nudge}
          smooth={true}
          to='projects'>
          see my work
        </Link>
      </header>
    );
  }
}

export default Header;
