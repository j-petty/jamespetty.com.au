import React, { useContext } from 'react';
import { isMobile } from 'react-device-detect';

import useMousePosition from 'hooks/useMousePosition';
import { MouseContext } from 'contexts/MouseContext';

import styles from './Cursor.module.scss';

const Cursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const { isHidden, isClicked, isHovered } = useContext(MouseContext);

  if (isMobile) {
    return null;
  }

  let classNames = '';

  if (isHidden) {
    classNames += ` ${styles.hidden} `;
  }

  if (isClicked) {
    classNames += ` ${styles.clicked} `;
  }

  if (isHovered) {
    classNames += ` ${styles.hovered} `;
  }

  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`${styles.cursorRing} ${classNames}`} />

      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`${styles.cursor} ${classNames}`} />
    </>
  );
};

export default Cursor;
