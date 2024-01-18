import { Ref, useEffect, useRef, useState } from 'react';

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(false);
    const setHoveredTrue = () => setIsHovered(true);
    const setHoveredFalse = () => setIsHovered(false);

    const element = ref.current;

    if (element) {
      element.addEventListener('mouseenter', setHoveredTrue);
      element.addEventListener('mouseleave', setHoveredFalse);
    }

    return () => {
      if (element) {
        element.removeEventListener('mouseenter', setHoveredTrue);
        element.removeEventListener('mouseleave', setHoveredFalse);
      }
    };
  }, [setIsHovered, ref.current]);

  return [ref, isHovered];
}
