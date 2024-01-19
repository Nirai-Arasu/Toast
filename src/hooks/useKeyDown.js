import React from 'react';

const useKeyDown = (key, cb) => {
  console.log(key, cb);
  React.useEffect(() => {
    window.addEventListener(key, cb);
    return () => window.removeEventListener(key, cb);
  }, []);
};

export default useKeyDown;
