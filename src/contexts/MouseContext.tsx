import React, { createContext, useState, useCallback, useEffect } from 'react';

/**
 * IMouseContext
 *
 * @param isHidden Whether the cursor is currently off the screen.
 * @param isClicked Whether the cursor is currently pressed.
 * @param isHovered Whether the cursor is hovering an intractable element.
 */
export interface IMouseContext {
  isHidden: boolean;
  isClicked: boolean;
  isHovered: boolean;
}

/**
 * MouseContext.
 *
 * @description Handles maintaining mouse state.
 * NOTE: originally this was all handled in the Cursor component however there were noticeable performance issues on larger screens.
 * Moving to context seems to have fixed that issue.
 */
export const MouseContext = createContext<IMouseContext>({} as IMouseContext);

const MouseContextProvider: React.FC = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHidden(false);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHidden(true);
  }, []);

  const onMouseDown = useCallback(() => {
    setIsClicked(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsClicked(false);
  }, []);

  const onMouseOver = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseOut = useCallback(() => {
    setIsHovered(false);
  }, []);

  /**
   * Add event listeners to track mouse events.
   */
  const addEventListeners = useCallback(() => {
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    document.querySelectorAll('a, button, input, textarea').forEach(element => {
      element.addEventListener('mouseover', onMouseOver);
      element.addEventListener('mouseout', onMouseOut);
    });
  }, []);

  /**
   * Remove event listeners to track mouse events.
   */
  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);

    document.querySelectorAll('a, button, input, textarea').forEach(element => {
      element.removeEventListener('mouseover', onMouseOver);
      element.removeEventListener('mouseout', onMouseOut);
    });
  }, []);

  useEffect(() => {
    addEventListeners();

    return () => {
      removeEventListeners();
    };
  }, []);

  return (
    <MouseContext.Provider
      value={{
        isHidden,
        isClicked,
        isHovered
      }}>
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;