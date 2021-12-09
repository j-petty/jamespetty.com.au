import React, { useEffect, useState, useCallback } from 'react';
import { isMobile } from 'react-device-detect';

import styles from './Cursor.module.scss';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({x: -50, y: -50});
  const [isHidden, setIsHidden] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  // Require state update after all elements have been added to the dom
  const [hasWindowLoaded, setHasWindowLoaded] = useState(false);

  if (isMobile) {
    return null;
  }

  useEffect(() => {
    // Refresh listeners after first load
    window.addEventListener('load', () => setHasWindowLoaded(true));
  }, []);

  useEffect(() => {
    addEventListeners();

    return () => removeEventListeners();
  }, [hasWindowLoaded]);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    document.querySelectorAll('a, button, input, textarea').forEach(el => {
      el.addEventListener('mouseover', onMouseOver);
      el.addEventListener('mouseout', onMouseOut);
    });
  };

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);

    document.querySelectorAll('a, button, input, textarea').forEach(el => {
      el.removeEventListener('mouseover', onMouseOver);
      el.removeEventListener('mouseout', onMouseOut);
    });
  }, []);

  const onMouseMove = (e: MouseEvent) => {
    setPosition({x: e.clientX, y: e.clientY});
  };

  const onMouseLeave = () => {
    setIsHidden(true);
  };

  const onMouseEnter = () => {
    setIsHidden(false);
  };

  const onMouseDown = () => {
    setIsClicked(true);
  };

  const onMouseUp = () => {
    setIsClicked(false);
  };

  const onMouseOver = () => {
    setIsLinkHovered(true);
  };

  const onMouseOut = () => {
    setIsLinkHovered(false);
  };

  let classNames = styles.cursor;

  if (isHidden) {
    classNames += ` ${styles.hidden} `;
  }

  if (isClicked) {
    classNames += ` ${styles.clicked} `;
  }

  if (isLinkHovered) {
    classNames += ` ${styles.linkHovered} `;
  }

  return (
    <div
      className={classNames}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }} />
  );
};

export default Cursor;
