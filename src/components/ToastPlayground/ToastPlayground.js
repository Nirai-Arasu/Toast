import React, { useState } from 'react';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf/ToastShelf';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import useKeyDown from '../../hooks/useKeyDown';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { createToast, removeAllToasts } = React.useContext(ToastContext);

  const [selectedVariant, setSelectedVariant] = React.useState('notice');
  const [content, setContent] = useState('');
  const closeToasts = (e) => {
    if (e.keyCode === 27) {
      removeAllToasts();
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      console.log('content empty');
      return;
    }
    createToast(content, selectedVariant);
    setSelectedVariant('notice');
    setContent('');
  };

  useKeyDown('keyup', closeToasts);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <form className={styles.controlsWrapper} onSubmit={onSubmitHandler}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={content}
              className={styles.messageInput}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  type="radio"
                  id={`variant-${variant}`}
                  name="variant"
                  value={variant}
                  checked={variant == selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
