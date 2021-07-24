import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon/Icon';

import styles from './Header.module.scss';

// NOTE: needs to be a React.Component to support Observer
class Header extends React.Component {
  render () {
    const { forwardedRef, skillsArray, stackArray } = this.props;

    return (
      <header id='home' className='textCenter' ref={forwardedRef}>
        <h1>Hi I&apos;m James.</h1>

        <ul className={styles.skillLoop}>
          {skillsArray.map((skill, index) =>
            <li key={index}>{skill}</li>
          )}
        </ul>

        <div className={styles.stackList}>
          <h2>dream stack</h2>
          <ul>
            {stackArray.map((stack, index) =>
              <li key={index}>
                <Icon
                  link={stack.link}
                  image={stack.icon}
                  imageAlt={stack.text} />

                <p>{stack.text}</p>
              </li>
            )}
          </ul>
        </div>

        <a className={styles.nudge} href='/#projects'>see my work</a>
      </header>
    );
  }
}

Header.propTypes = {
  forwardedRef: PropTypes.object,
  skillsArray: PropTypes.array,
  stackArray: PropTypes.array
};

export default Header;
