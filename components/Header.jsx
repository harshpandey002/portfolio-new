/* eslint-disable @next/next/no-img-element */
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
      <span className="hidden mobile:flex bg-nav-mobile-bg mix-blend-difference backdrop-blur-[5px] rounded-full w-12 h-12 items-center justify-center fixed bottom-6 right-4 z-[11]">
        <Hamburger
          rounded
          color="#303030"
          size={18}
          toggled={showMenu}
          toggle={setShowMenu}
        />
      </span>
      <div className="sticky top-0 h-1 z-10 bg-gradient-accent" />
      <div
        className={`w-full flex flex-col sticky top-1 z-10 border-b border-border-dark bg-[rgba(17,17,17,0.881)] backdrop-blur-[10px] mobile:fixed mobile:top-auto mobile:bottom-[10%] mobile:right-4 mobile:w-max mobile:h-[50vh] mobile:!border-b-0 mobile:!bg-transparent mobile:backdrop-blur-0 mobile:transition-all mobile:duration-[400ms] mobile:ease-out ${showMenu ? 'mobile:clip-path-[circle(83%_at_83%_85%)]' : 'mobile:clip-path-[circle(0%_at_70%_96%)]'}`}
      >
        <nav className="py-[1.4rem] px-8 flex items-center justify-between mobile:py-[1.4rem] mobile:px-[1.4rem] mobile:items-end mobile:w-max mobile:mx-auto mobile:mt-auto">
          <div className="cursor-pointer mobile:hidden">
            <Link href="/" scroll={false}>
              <img className="w-[150px] mb-[-10px]" src="../harshpandey.png" alt="Logo" />
            </Link>
          </div>
          <ul className="flex items-center gap-1 list-none mobile:gap-3 mobile:flex-col mobile:items-end mobile:w-max">
            <Link href="/" scroll={false}>
              <li className={`py-2 px-[22px] rounded cursor-pointer text-base font-semibold hover:bg-hover-nav hover:text-white mobile:py-2 mobile:px-3 mobile:bg-nav-mobile-bg mobile:text-nav-mobile-text mobile:text-lg mobile:hover:bg-nav-mobile-bg mobile:hover:text-nav-mobile-text ${isActive('/') ? 'bg-hover-nav text-white mobile:!bg-white mobile:!text-black' : 'text-[#a0a0a0]'}`}>Home</li>
            </Link>
            <Link href="/blogs" scroll={false}>
              <li className={`py-2 px-[22px] rounded cursor-pointer text-base font-semibold hover:bg-hover-nav hover:text-white mobile:py-2 mobile:px-3 mobile:bg-nav-mobile-bg mobile:text-nav-mobile-text mobile:text-lg mobile:hover:bg-nav-mobile-bg mobile:hover:text-nav-mobile-text ${isActive('/blogs') ? 'bg-hover-nav text-white mobile:!bg-white mobile:!text-black' : 'text-[#a0a0a0]'}`}>Blogs</li>
            </Link>
            <Link href="/projects" scroll={false}>
              <li className={`py-2 px-[22px] rounded cursor-pointer text-base font-semibold hover:bg-hover-nav hover:text-white mobile:py-2 mobile:px-3 mobile:bg-nav-mobile-bg mobile:text-nav-mobile-text mobile:text-lg mobile:hover:bg-nav-mobile-bg mobile:hover:text-nav-mobile-text ${isActive('/projects') ? 'bg-hover-nav text-white mobile:!bg-white mobile:!text-black' : 'text-[#a0a0a0]'}`}>
                Projects
              </li>
            </Link>
            <Link href="/about" scroll={false}>
              <li className={`py-2 px-[22px] rounded cursor-pointer text-base font-semibold hover:bg-hover-nav hover:text-white mobile:py-2 mobile:px-3 mobile:bg-nav-mobile-bg mobile:text-nav-mobile-text mobile:text-lg mobile:hover:bg-nav-mobile-bg mobile:hover:text-nav-mobile-text ${isActive('/about') ? 'bg-hover-nav text-white mobile:!bg-white mobile:!text-black' : 'text-[#a0a0a0]'}`}>About</li>
            </Link>
            <li onClick={handleResume} className="py-2 px-[22px] rounded cursor-pointer text-base text-[#a0a0a0] font-semibold hover:bg-hover-nav hover:text-white flex items-center justify-center gap-2 mobile:py-2 mobile:px-3 mobile:bg-nav-mobile-bg mobile:text-nav-mobile-text mobile:text-lg mobile:hover:bg-nav-mobile-bg mobile:hover:text-nav-mobile-text">
              Resume <BsDownload />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
