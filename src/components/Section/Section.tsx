import React, { forwardRef, ReactElement, useEffect } from 'react';
import gsap from 'gsap';

import './Section.module.scss';

interface ISectionProps {
  id: string;
  title: string;
  children?: ReactElement | Array<ReactElement>;
}

const Section: React.ForwardRefRenderFunction<HTMLElement, ISectionProps> = ({ id, title, children }: ISectionProps, ref: React.ForwardedRef<HTMLElement>) => {
  // animate section elements appearing as they are scrolled into view
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
    <section id={id} ref={ref}>
      {title &&
        <h2>{title}</h2>
      }

      {children}
    </section>
  );
};

export default forwardRef(Section);
