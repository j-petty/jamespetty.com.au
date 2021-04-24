import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ScrollMenuItem.module.css';

const ScrollMenuItem = (props) => {
  const { link, inView } = props;

  const [containerPosition, setContainerPosition] = useState({x: 0, y: 0, w: 0, h: 0});
  const [initPosition, setInitPosition] = useState({x: 0, y: 0, w: 0, h: 0});
  const [offset, setOffset] = useState({x: 0, y: 0});
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Use refs to get initial position
  const container = useRef();
  const element = useRef();

  const onMouseMove = (e) => {
    if (!container || !element || !isMouseOver) {
      return;
    }

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Force mouse leave
    if (mouseX < containerPosition.x - 10 ||
      mouseX > containerPosition.x + containerPosition.w + 10 ||
      mouseY < containerPosition.y - 10 ||
      mouseY > containerPosition.y + containerPosition.h + 10) {
      onMouseLeave();
      return;
    }

    const xOffset = mouseX - initPosition.x - (initPosition.w / 2);
    const yOffset = mouseY - initPosition.y - (initPosition.h / 2);

    // Update position
    setOffset({x: xOffset, y: yOffset});
  };

  const onMouseEnter = () => {
    setIsMouseOver(true);
  };

  const onMouseLeave = () => {
    setOffset({x: 0, y: 0});
    setIsMouseOver(false);
  };

  useEffect(() => {
    const containerRect = container.current.getBoundingClientRect();
    const rect = element.current.getBoundingClientRect();

    // Set initial positions
    setContainerPosition({x: containerRect.x, y: containerRect.y, w: containerRect.width, h: containerRect.height});
    setInitPosition({x: rect.x, y: rect.y, w: rect.width, h: rect.height});
  }, [container.current, element.current]);

  return (
    <li
      id={`scroll-${link}`}
      className={inView ? `${styles.menuItem} active scrollItem` : `${styles.menuItem} scrollItem`}
      ref={container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}>
      <a
        ref={element}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`
        }}
        href={`/#${link}`} aria-label='Page Scroll'><span></span></a>
    </li>
  );
};

ScrollMenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  inView: PropTypes.bool
};

export default ScrollMenuItem;
