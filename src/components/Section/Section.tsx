import React, { forwardRef, ReactElement } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, PlayState } from 'react-gsap';

import './Section.module.scss';

interface ISectionProps {
  id: string;
  title: string;
  children?: ReactElement | Array<ReactElement>;
}

const Section: React.ForwardRefRenderFunction<HTMLElement, ISectionProps> = ({ id, title, children }: ISectionProps, ref: React.ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} id={id}>
      <Controller>
        <Scene
          triggerElement={`#${id}`}
          triggerHook='onEnter'
          offset={50}>
          {(progress: any, event: any) => (
            <Timeline
              duration={0.8}
              paused
              playState={
                event.type === 'enter' && event.scrollDirection === 'FORWARD' ? PlayState.play :
                  event.type === 'leave' && event.scrollDirection === 'REVERSE' ? PlayState.reverse :
                    undefined
              }>
              <Tween
                from={{ opacity: 0, y: 15 }}
                to={{ opacity: 1, y: 0 }}
                ease='Back.easeInOut'>
                {title &&
                  <h2>{title}</h2>
                }
              </Tween>

              {children}
            </Timeline>
          )}
        </Scene>
      </Controller>
    </section>
  );
};

export default forwardRef(Section);
