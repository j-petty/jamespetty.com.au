import React, { forwardRef, useMemo } from 'react';
import TypeAnimation from 'react-type-animation';

import { IIconLink } from 'types/IconLink';

import Icon from 'components/Icon/Icon';

import styles from './Header.module.scss';

interface IHeaderProps {
  skillsArray: Array<string>;
  stackArray: Array<IIconLink>;
}

const Header: React.ForwardRefRenderFunction<HTMLElement, IHeaderProps> = ({ skillsArray, stackArray }: IHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const skills = useMemo(() => {
    const skillsAnimation: Array<string | number> = [];

    skillsArray.forEach(skill => {
      skillsAnimation.push(skill);

      skillsAnimation.push(2500);
    });

    return skillsAnimation;
  }, [skillsArray]);

  return (
    <header id='home' className='textCenter' ref={ref}>
      <h1>Hi I&apos;m James.</h1>

      <ul className={styles.skillLoop}>
        <TypeAnimation
          wrapper='li'
          cursor
          repeat={Infinity}
          sequence={skills} />
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
