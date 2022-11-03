import { useEffect, useState } from 'react';

/**
 * IMousePosition
 *
 * @param x X position
 * @param y Y position
 */
interface IMousePosition {
  x: number | null;
  y: number | null;
}
/**
 * UseMousePosition hook.
 *
 * @description Gets the current mouse position.
 * @returns {IMousePosition} Returns the current mouse position.
 */
const useMousePosition = (): IMousePosition => {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
