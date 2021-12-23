import React, { forwardRef } from 'react';

import { IIconLink } from 'types/IconLink';

import Icon from 'components/Icon/Icon';

import styles from './Header.module.scss';

interface IHeaderProps {
  skillsArray: Array<string>;
  stackArray: Array<IIconLink>;
}

const Header: React.ForwardRefRenderFunction<HTMLElement, IHeaderProps> = ({ skillsArray, stackArray }: IHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  return (
    <header id='home' className='textCenter' ref={ref}>
      <h1>Hi I&apos;m James.</h1>

      <ul className={styles.skillLoop}>
        {skillsArray.map((skill, index) =>
          <li key={index}>{skill}</li>
        )}
      </ul>

      <div className={styles.stackList}>
        <h2>dream stack</h2>
        <ul>
          {stackArray.map((stack, index) => (
            <li key={index}>
              <Icon
                link={stack.link}
                image={stack.icon}
                imageAlt={stack.text} />

              <p>{stack.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <a className={styles.nudge} href='/#projects'>see my work</a>
    </header>
  );
};

export default forwardRef(Header);
