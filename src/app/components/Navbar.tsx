"use client"
import Link from 'next/link';
import TypingText from './TypingText';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < 10) {
            setShow(true);
          } else if (currentScrollY > lastScrollY) {
            // Scrolling down
            setShow(false);
          } else {
            // Scrolling up
            setShow(true);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <nav
      style={{ fontFamily: 'Cambria, serif' }}
      className={`bg-red-100 bg-opacity-5 backdrop-blur-sm shadow p-4 flex justify-end fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex flex-row items-center space-x-2">
        <TypingText text="Get to know me" className="" />
        <span className="mx-2 self-stretch border-l-4 border-black"></span>
        <p className="text-4xl font-bold">JAMES</p>
      </div>

      <div className="flex-row items ml-auto">
        <div className="bg-red-900 h-12 border-solid border-black border-2 drop-shadow-md rounded-xl flex items-center space-x-6">
          <Link href="#top" scroll={true} className="text-lg text-white hover:font-bold pl-4">
            Home
          </Link>
          <Link href="#about" scroll={true} className="text-lg text-white hover:font-bold">
            About
          </Link>
          <Link href="/contacts" className="text-lg text-white hover:font-bold pr-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}