import React from 'react';

import styles from './SkillList.module.scss';

interface ISkillListProps {
  items: Array<string>;
  className?: string;
}

const SkillList: React.FC<ISkillListProps> = ({ items, className }) => {
  return (
    <ul className={`${styles.list} ${className ? className : ''}`}>
      {items.map(item =>
        <li key={item} className={styles.listItem}>{item}</li>
      )}
    </ul>
  );
};

export default SkillList;
