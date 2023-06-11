import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '@/styles/News.module.css';

export default function News() {
  const [show, setShow] = useState(true);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <>
      <div className={styles.container}>
        <p>
          This Portfolio is not updated with recent projects and experiences.
        </p>
      </div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}
