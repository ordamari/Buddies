import { useEffect } from 'react';

function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  cb: () => void | Promise<void>,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (!element.contains(e.target as Node)) cb();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}
export default useClickOutside;
