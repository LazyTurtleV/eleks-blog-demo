import { useEffect, useRef } from 'react';

export default function useResizableTextarea(value) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = '0px';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }
  }, [ref, value]);

  return ref;
}
