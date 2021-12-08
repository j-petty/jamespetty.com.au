import React from 'react';

import styles from './Footer.module.scss';

interface IFooterProps {
  link: string;
  name: string;
}

const Footer: React.FC<IFooterProps> = ({ link, name }) => {
  return (
    <footer id='footer'>
      <span className={styles.copy}>Created by <a href={link} className='simpleLink'>{name}</a>.</span>
    </footer>
  );
};

export default Footer;
