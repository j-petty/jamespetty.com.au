import React from 'react';
import {
  SiLinkedin,
  SiStackoverflow,
  SiGithub
} from 'react-icons/si';

import Icon from 'components/Icon/Icon';
import SocialList from 'components/SocialList/SocialList';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer id='footer'>
      <SocialList>
        <Icon
          link='https://www.linkedin.com/in/j-petty'
          image={<SiLinkedin />}
          imageAlt='LinkedIn' />

        <Icon
          link='https://stackoverflow.com/users/5434910/j-petty'
          image={<SiStackoverflow />}
          imageAlt='Stack Overflow' />

        <Icon
          link='https://github.com/j-petty'
          image={<SiGithub />}
          imageAlt='GitHub' />
      </SocialList>

      <span className={styles.copy}>Made with <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React</a> and <a href='https://www.contentful.com/' target='_blank' rel='noreferrer'>Contentful</a>.</span>
      <span className={styles.copy}> See the <a href='https://github.com/j-petty/jamespetty.com.au' target='_blank' rel='noreferrer'>source code</a>.</span>
    </footer>
  );
};

export default Footer;
