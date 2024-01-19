import React, { useState } from 'react';

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const createToast = (content, selectedVariant) => {
    setToasts([
      ...toasts,
      {
        content,
        selectedVariant,
        uniqueId: crypto.randomUUID(),
      },
    ]);
  };
  const removeToast = (id) => {
    setToasts([...toasts.filter((toast) => toast.uniqueId != id)]);
  };
  const removeAllToasts = () => {
    setToasts([]);
  };
  return (
    <ToastContext.Provider
      value={{
        createToast,
        removeToast,
        removeAllToasts,
        toasts,
      }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
