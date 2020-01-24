import React from 'react';

import styles from './Header.module.css';

class Header extends React.Component {
  render () {
    const skillsArray = ['full stack developer', 'web designer', 'front end developer', 'technical consultant', 'entrepreneur'];

    return (
      <header id='home' className={`${styles.mainHeader} fullHeight textCenter`}>
        <h1 className={styles.mainTitle}>Hi I&apos;m James.</h1>

        <ul className={styles.subTitle}>
          {skillsArray.map(skill =>
            <li key={skill}>{skill}</li>
          )}
        </ul>

        <a className={styles.nudge} href='#projects'>see my work</a>
      </header>
    );
  }
}

export default Header;
