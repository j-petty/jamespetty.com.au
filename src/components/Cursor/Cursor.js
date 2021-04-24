/* global document */
import React, { useEffect, useState } from 'react';

import styles from './Cursor.module.css';

const Cursor = () => {
  const [position, setPosition] = useState({x: -50, y: -50});
  const [isHidden, setIsHidden] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();

    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const handleLinkHoverEvents = () => {
    console.log(document.getElementsByTagName('a'));
    Array.from(document.getElementsByTagName('a')).forEach(el => {
      el.addEventListener('mouseover', onMouseOver);
      el.addEventListener('mouseout', onMouseOut);
    });
  };

  const onMouseMove = (e) => {
    //setPosition({x: e.clientX, y: e.clientY});
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
    console.log('called');
    setIsLinkHovered(true);
  };

  const onMouseOut = () => {
    setIsLinkHovered(false);
  };

  let classNames = styles.cursor;

  if (isHidden) {
    classNames += ` ${styles.cursorHidden} `;
  }

  if (isClicked) {
    classNames += ` ${styles.cursorClicked} `;
  }

  if (isLinkHovered) {
    classNames += ` ${styles.cursorLinkHovered} `;
  }

  return (
    <div className={classNames}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}/>
  );
};

export default Cursor;
