import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function News() {
  const [show, setShow] = useState(true);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <>
      <div className="max-w-[280px] bg-news-bg border-2 border-news-border backdrop-blur-[4px] rounded-card fixed bottom-12 right-12 flex flex-col gap-2 p-4 mobile:bottom-28">
        <p className="text-white text-base z-[100]">
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
