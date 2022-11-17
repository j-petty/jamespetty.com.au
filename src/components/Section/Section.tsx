import React, { forwardRef, ReactElement, useEffect } from 'react';
import gsap from 'gsap';

import styles from './Section.module.scss';

interface ISectionProps {
  id: string;
  title: string;
  subTitle?: string | ReactElement;
  className?: string;
  children?: ReactElement | Array<ReactElement>;
}

const Section: React.ForwardRefRenderFunction<HTMLElement, ISectionProps> = ({ id, title, subTitle, className, children }: ISectionProps, ref: React.ForwardedRef<HTMLElement>) => {
  // Animate section elements appearing as they are scrolled into view
  useEffect(() => {
    const query = gsap.utils.selector(`#${id}`);

    gsap
      .fromTo(
        query('.animate'),
        {
          opacity: 0,
          y: 15
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: `#${id}`,
            start: 'top center',
            toggleActions: 'play none none reverse'
          },
          ease: 'Back.easeInOut',
          stagger: 0.5,
          duration: 1
        }
      );
  }, []);

  return (
    <section id={id} ref={ref} className={className}>
      {title &&
        <h2 className={subTitle ? styles.small : ''}>{title}</h2>
      }

      {subTitle &&
        <p className='para--light'>{subTitle}</p>
      }

      {children}
    </section>
  );
};

export default forwardRef(Section);
