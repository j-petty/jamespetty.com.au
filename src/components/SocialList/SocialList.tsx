import React, { ReactElement } from 'react';

import styles from './SocialList.module.scss';

const SocialList: React.FC = ({ children }) => {
  return (
    <ul className={styles.socialList}>
      {(children as Array<ReactElement>)?.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
