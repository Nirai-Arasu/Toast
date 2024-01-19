import React from 'react';

import ToastPlayground from '../ToastPlayground';
import ToastProvider from '../ToastProvider/ToastProvider';

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
    </ToastProvider>
  );
}

export default App;
