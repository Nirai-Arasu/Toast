import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ content, selectedVariant, uniqueId }) => (
        <li key={uniqueId} className={styles.toastWrapper}>
          <Toast
            variant={selectedVariant}
            content={content}
            uniqueId={uniqueId}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
