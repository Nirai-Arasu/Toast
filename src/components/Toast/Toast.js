import React, { useState } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, content, uniqueId }) {
  const Tag = ICONS_BY_VARIANT[variant];
  const { removeToast } = React.useContext(ToastContext);
  return (
    <div className={`${styles.toast} ${styles[[variant]]}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>{content}</p>
      <button
        className={styles.closeButton}
        onClick={() => removeToast(uniqueId)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
