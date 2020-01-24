import React from 'react';
import TextLoop from 'react-text-loop';
import { Link } from 'react-scroll';

import styles from './Header.module.css';

class Header extends React.Component {
  constructor (props) {
    super(props);

    // TODO: remove from state?
    this.state = {
      skillsArray: ['stuff', 'websites', 'games', 'apps']
    };
  }

  render () {
    const { skillsArray } = this.state;

    return (
      <header id='home' className={`${styles.mainHeader} fullHeight`}>
        <h1 className={styles.mainTitle}>Hi I&apos;m James.</h1>

        <div className={styles.subTitle}>
          <span>I build </span>

          <TextLoop
            delay={500}
            interval={1500}>
            {skillsArray.map(skill =>
              <span key={skill} className={styles.skills}>{skill}</span>
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
