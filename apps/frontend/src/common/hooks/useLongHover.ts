import { useEffect } from 'react';
import { useToggle } from './useToggle';

function useLongHover(
  ref: React.RefObject<HTMLElement>,
  cb: () => void | Promise<void>,
  ms = 300,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let timer: number;
    const handleMouseOver = () => {
      timer = window.setTimeout(() => {
        cb();
      }, ms);
    };

    const handleMouseOut = () => {
      window.clearTimeout(timer);
    };

    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
}
export default useLongHover;
