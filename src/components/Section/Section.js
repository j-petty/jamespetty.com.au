import React from 'react';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import './Section.module.css';

// NOTE: needs to be a React.Component to support Observer
class Section extends React.Component {
  render () {
    const { id, title, forwardedRef } = this.props;

    return (
      <section ref={forwardedRef} id={id}>
        <Controller>
          <Scene
            triggerElement={`#${id}`}
            triggerHook='onEnter'
            offset={50}>
            {(progress, event) => (
              <Timeline
                duration={0.8}
                paused
                playState={
                  event.type === 'enter' && event.scrollDirection === 'FORWARD' ? 'play' :
                    event.type === 'leave' && event.scrollDirection === 'REVERSE' ? 'reverse' :
                      null
                }>
                <Tween
                  from={{ opacity: 0, y: 15 }}
                  to={{ opacity: 1, y: 0 }}
                  ease='Back.easeInOut'>
                  {title &&
                    <h2>{title}</h2>
                  }
                </Tween>

                {this.props.children}
              </Timeline>
            )}
          </Scene>
        </Controller>
      </section>
    );
  }
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  id: PropTypes.string,
  title: PropTypes.string,
  forwardedRef: PropTypes.object
};

export default Section;
