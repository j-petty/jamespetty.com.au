import React from 'react';

import Icon from 'components/Icon/Icon';
import SocialList from 'components/SocialList/SocialList';

import {
  linkedInImg,
  stackOverflowImg,
  githubImg
} from 'assets/icons';

import styles from './Footer.module.scss';

interface IFooterProps {
  link: string;
  name: string;
}

const Footer: React.FC<IFooterProps> = ({ link, name }) => {
  return (
    <footer id='footer'>
      <SocialList>
        <Icon
          link='//www.linkedin.com/in/j-petty'
          image={linkedInImg}
          imageAlt='LinkedIn' />

        <Icon
          link='//stackoverflow.com/users/5434910/j-petty'
          image={stackOverflowImg}
          imageAlt='Stack Overflow' />

        <Icon
          link='//github.com/j-petty'
          image={githubImg}
          imageAlt='GitHub' />
      </SocialList>

      <span className={styles.copy}>Created by <a href={link} className='simpleLink'>{name}</a>.</span>
    </footer>
  );
};

export default Footer;
