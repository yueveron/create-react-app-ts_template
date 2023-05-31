import { useState, useEffect } from 'react';
const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const onKeyDownHandler = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const onKeyUpHandler = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', onKeyDownHandler);
    window.addEventListener('keyup', onKeyUpHandler);

    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
      window.removeEventListener('keyup', onKeyUpHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

export default useKeyPress;
