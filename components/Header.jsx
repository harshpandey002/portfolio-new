/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Slant as Hamburger } from 'hamburger-react';
import { BsDownload } from 'react-icons/bs';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const isActive = (path) => {
    return path === router.asPath;
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setShowMenu((prev) => {
        if (prev) return false;
      });
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const handleResume = () => {
    window.open('/Resume.pdf', '_blank');
  };

  return (
    <>
      <span className={styles.menu}>
        <Hamburger
          rounded
          color="#303030"
          size={18}
          toggled={showMenu}
          toggle={setShowMenu}
        />
      </span>
      <div className={styles.gradient} />
      <div className={`${styles.container} ${showMenu ? styles.clip : ''}`}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/" scroll={false}>
              <img src="../harshpandey.png" alt="Logo" />
            </Link>
          </div>
          <ul className={styles.links}>
            <Link href="/" scroll={false}>
              <li className={isActive('/') ? styles.active : ''}>Home</li>
            </Link>
            <Link href="/blogs" scroll={false}>
              <li className={isActive('/blogs') ? styles.active : ''}>Blogs</li>
            </Link>
            <Link href="/projects" scroll={false}>
              <li className={isActive('/projects') ? styles.active : ''}>
                Projects
              </li>
            </Link>
            <Link href="/about" scroll={false}>
              <li className={isActive('/about') ? styles.active : ''}>About</li>
            </Link>
            <li onClick={handleResume} className={styles.resume}>
              Resume <BsDownload />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
