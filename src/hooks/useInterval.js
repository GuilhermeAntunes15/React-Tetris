import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Lembre-se da última chamada de retorno.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Configure o intervalo.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
